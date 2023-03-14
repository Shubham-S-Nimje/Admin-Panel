
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './Components/Context/ContextProvider';
import Form from './Components/FormData/Form';
import Cart from './Components/Cart/Cart';
import Display from './Components/DisplayData/Display';


function App() {
  return (
    <ContextProvider>
    <div className="App row py-5">
      <div className='col'>
      <Form/>
      </div>
      <div className='col'>
      <Cart/>
      </div>
      <Display/>
    </div>
    </ContextProvider>
  );
}

export default App;
