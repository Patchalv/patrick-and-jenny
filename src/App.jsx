import './App.css';
import main from './assets/main.jpeg';
import Timer from './components/Timer/Timer';

function App() {

  return (
    <div className='App'>
      <div className='desktop'>
        <div className='row'>
          <div className='column'>
            <div className='picture-container'>
              <img src={main} />
            </div>
          </div>
          <div className='column'>
            <div className='info-container'>
              <h1>Patrick & Jenny</h1>
              <p>have been married for:</p>
              <Timer weddingDate="August, 26, 2023"/>
            </div>
          </div>
        </div>
      </div>

      <div className='responsive'>
        <div className='responsive-pic-container'>
          <img src={main} />
        </div>
        <div className='responsive-info-container'>
          <h1>Patrick & Jenny</h1>
          <p>have been married for:</p>
          <Timer weddingDate="August, 26, 2023"/>
        </div>
      </div>
    </div>
  )
}

export default App
