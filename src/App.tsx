
import './App.css';
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Home from './component/home';
import UserDetalise from './component/userDetalies';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/user';

function App() {
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getUsers());
})


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact={true} path='/' component={Home} />
          <Route path='/userdetalies/:id' component={UserDetalise} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
