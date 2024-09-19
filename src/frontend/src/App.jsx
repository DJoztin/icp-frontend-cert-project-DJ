import LoginButton from './login/LoginButton';
import Cart from './components/Cart/Cart';
import Form from './form/Form';
// import Counter from './components/counter/Counter';

// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
      </header> */}
      <main>

        {/* <div className='container'>
          <h2>Counter</h2>
          <Counter />
        </div> */}

        <div className='container'>
          <h2>Cart</h2>
          <Cart />
        </div>

        <div className='container'>
          <h2>Form</h2>
          <Form />
        </div>

      </main>
    </div>
  );
}

export default App;