import './App.css';
import Header from './components/Header';
import WorkEx from './components/WorkEx';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <Header/>
      <div className='body'>
        <About/>
        <h2 className='worktitle'>Work Experience</h2>
        <div className='workex'>
          <WorkEx name='BC Ministry of Social Development and Poverty Reduction' title='Technical Analyst Co-op' dates='May 2022 - Dec 2022'></WorkEx>
          <WorkEx name='Department of National Defense' title='Software Co-op Student' dates='Jun 2021 - Aug 2021'></WorkEx>
          <WorkEx name='Saanich Parks and Recreation' title='Program Assistant' dates='Jul 2018 - Aug 2020'></WorkEx>
        </div>
        <h2 className='worktitle'>Projects</h2>
        <div className='Cool Projects'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
