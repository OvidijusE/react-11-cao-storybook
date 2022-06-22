import './App.css';
import Button from './components/Button/Button';
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
        <Notification variant='danger'>This is danger alert</Notification>
        <Notification variant='warning'>This is warning alert</Notification>
        <Notification variant='info'>This is info alert</Notification>
        <Notification variant='success'>This is success alert</Notification>
      </div>
    </div>
  );
}

export default App;
