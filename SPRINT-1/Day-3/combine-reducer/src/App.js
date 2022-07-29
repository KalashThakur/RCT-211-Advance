import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { Todos } from './Components/Todos';
import { Login } from './Components/Login';
import { useSelector } from 'react-redux';

function App() {

  const isAuth = useSelector((state) => state.auth.isAuth)
  return (
    <div className="App">
      <Counter />
      <br />
      <Login />
      <hr />
      {isAuth && <Todos />}
    </div>
  );
}

export default App;
