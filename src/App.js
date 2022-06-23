import './App.css';
import Button from './components/Button/Button';
import Hero from './components/Hero/Hero';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <div className='App'>
      <h1>Cao</h1>
      <div className='buttons'>
        <Button variant='primary' size='large'>
          Primary
        </Button>
        <Button variant='secondary' size='large'>
          Secondary
        </Button>
      </div>

      <div className='alerts'>
        <Notification icon={'fa-exclamation-circle'} variant='danger' cancel={'fa-times-circle-o'}>
          This is danger alert
        </Notification>
        <Notification icon={'fa-question-circle-o'} variant='warning' cancel={'fa-times-circle-o'}>
          This is warning alert
        </Notification>
        <Notification icon={'fa-info-circle'} variant='info' cancel={'fa-times-circle-o'}>
          This is info alert
        </Notification>
        <Notification icon={'fa-check-circle-o'} variant='success' cancel={'fa-times-circle-o'}>
          This is success alert
        </Notification>
      </div>

      <div className='hero'>
        <Hero type='primary' title='Primary hero' subtitle='Primary subtitle' />
      </div>
    </div>
  );
}

export default App;
