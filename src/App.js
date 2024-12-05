import intro from './assets/intro.png';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">
        <p>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 75,
              wrapperClassName: 'typewriter-text',
              html: true,
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi there.')
                .pauseFor(1000)
                .typeString('<br>My name is HyunHwa.')
                .pauseFor(1000)
                .typeString('<br>I am a software developer.')
                .pauseFor(2000)
                .start();
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default App;