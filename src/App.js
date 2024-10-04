import './App.css';
import Header from './components/Header';
import WorkEx from './components/WorkEx';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <About/>
        <div className='workex'>
          <WorkEx name='BC Ministry of Social Development and Poverty Reduction' title='Technical Analyst Co-op'></WorkEx>
          <WorkEx name='Department of National Defense' title='Software Co-op Student'></WorkEx>
          <WorkEx name='Saanich Parks and Recreation' title='Program Assistant'></WorkEx>
        </div>
      </div>
      <div className='body-mobile'>
        <About/>
        <div className='workex-mobile'>
          <WorkEx name='BC Ministry of Social Development and Poverty Reduction' title='Technical Analyst Co-op'></WorkEx>
          <WorkEx name='Department of National Defense' title='Software Co-op Student'></WorkEx>
          <WorkEx name='Saanich Parks and Recreation' title='Program Assistant'></WorkEx>
        </div>
      </div>
    </div>
  );
}

export default App;
