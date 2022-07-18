import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import LoadingButton from './LoadingButton';

function App() {
  const createPathologist = useState(false);
  
  const id = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <LoadingButton
        type='submit'
        form='pathologist-form'
        style={{ minWidth: '91px' }}
        disabled={createPathologist.isLoading}
        isLoading={createPathologist.isLoading}
      >
        {id === '0' ? 'Create' : 'Update'}
      </LoadingButton>
    </div>

  );
}

export default App;
