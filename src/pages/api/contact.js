import nodemailer from 'nodemailer';

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const ipCache = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message, token } = req.body;
  if (!name || !email || !message || !token)
    return res.status(400).json({ message: 'Missing fields' });

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  if (ipCache.has(ip) && now - ipCache.get(ip) < RATE_LIMIT_WINDOW) {
    return res.status(429).json({ message: 'Too many requests — try again later.' });
  }
  ipCache.set(ip, now);

  // Verify reCAPTCHA
  const captchaVerify = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );
  const captchaJson = await captchaVerify.json();

  if (!captchaJson.success) {
    return res.status(403).json({ message: 'Failed reCAPTCHA verification' });
  }

  // Send email using Gmail
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
