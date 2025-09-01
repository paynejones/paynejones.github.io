import styles from './page.module.css';
import Header from '../components/Header';
import WorkEx from '../components/WorkEx';
import About_mobile from '../components/About_Mobile';
import About from '../components/About';
import Contact from '../components/Contact';
import Project from '../components/Project';
import blurbs from '../static/blurbs.json';


function page() {
  return (
    <div className={styles.App}>
      <style rel="preload">
      @import url(&apos;https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&apos;);
      </style>
      <Header/>
      <div className={styles.body}>
        <About blurb={blurbs.about}/>
        <About_mobile blurb={blurbs.about}/>
        <h1 className={styles.worktitle}>Work Experience</h1>
        <div className={styles.workex}>
          <WorkEx name='University of Victoria Department of Physics and Astronomy' title='HEP Software Developer' dates='Jan 2025 - Apr 2025' blurb={blurbs.phys}></WorkEx>
          <WorkEx name='BC Ministry of Social Development and Poverty Reduction' title='Technical Analyst Co-op' dates='May 2022 - Dec 2022' blurb={blurbs.bcgov}></WorkEx>
          <WorkEx name='Department of National Defense Base Information Services' title='Software Co-op Student' dates='Jun 2021 - Aug 2021' blurb={blurbs.dnd}></WorkEx>
        </div>
        <h1 className={styles.worktitle}>Projects</h1>
        <div className={styles.projects}>
          <Project user="vike-and-sell" blurb={blurbs.vikeandsell}/>
          <Project user="paynejones" repo="portfolio-site" blurb={blurbs.site}/>
        </div>
        <h1 className={styles.worktitle}>Contact Me</h1>
        <div className={styles.contactme}>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default page;
