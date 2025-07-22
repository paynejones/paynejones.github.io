'use client';

import styles from "./Contact.module.css"
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact(props){
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const recaptchaRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Sending...');

        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();

        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
        });

        const data = await res.json();
        setStatus(data.message);
    }

    return(
        <div className={styles.contact}>
            <form onSubmit={handleSubmit} className={styles.contactform}>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={styles.input}
                    maxLength={20}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={styles.input}
                />
                <textarea
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className={styles.textarea}
                    maxLength={1000}
                />
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lfx_oorAAAAAC2BxXZlFuG00kE4TCyvF6EkVvNJ"
                    size="invisible"
                />
                <button type="submit" className={styles.button}>Send</button>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
}

