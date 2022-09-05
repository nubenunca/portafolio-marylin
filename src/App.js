import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='App-header' >
        <div className='Flex-container'>
          <div className='Col'>
            <img src={logo} className="App-logo" alt="logo" width={"200px"} />
          </div>
          <div className='Col'>
            <h1> <em>Hello world!</em></h1>
            <p> (...) Sólo yo sé que si la mano <br/>
              deslizo por el aire, todavía<br/>
              me hieren sus espinas. <br/>
            </p>
            <div className='Cite'>
              <cite> Meira del Mar</cite>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;


