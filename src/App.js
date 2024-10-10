import './App.css';
import Header from './components/Header';
import WorkEx from './components/WorkEx';
import About from './components/About';
import Project from './components/Project';
import blurbs from './static/blurbs.json';



function App() {
  return (
    <div className="App">
      <style rel="preload">
      @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <Header/>
      <div className='body'>
        <About blurb={blurbs.about}/>
        <h2 className='worktitle'>Work Experience</h2>
        <div className='workex'>
          <WorkEx name='BC Ministry of Social Development and Poverty Reduction' title='Technical Analyst Co-op' dates='May 2022 - Dec 2022' blurb={blurbs.bcgov}></WorkEx>
          <WorkEx name='Department of National Defense Base Information Services' title='Software Co-op Student' dates='Jun 2021 - Aug 2021' blurb={blurbs.dnd}></WorkEx>
          <WorkEx name='Saanich Parks and Recreation' title='Program Assistant' dates='Jul 2018 - Aug 2020' blurb={blurbs.saanich}></WorkEx>
        </div>
        <h2 className='worktitle'>Projects</h2>
        <div className='projects'>
          <Project user="vike-and-sell" blurb={blurbs.vikeandsell}/>
          <Project user="paynejones" repo="paynejones.github.io" blurb={blurbs.site}/>
        </div>
      </div>
    </div>
  );
}

export default App;
