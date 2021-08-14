import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Login from './Components/Login'
import Register from './Components/Register'
import UserDashboard from './Components/UserDashboard'
import BookDashboard from './Components/BookDashboard';
import Profile from './Components/Profile';
import Messages from './Components/Messages';
import Error500 from './Components/500'



function App() {
  return (
    <>
    <Router>
     <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/user">
          <UserDashboard />
        </Route>

        <Route exact path="/500">
          <Error500 />
        </Route>

        <Route exact path='/book/:bookID'>
          <BookDashboard  />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path='/messages'>
          <Messages />
        </Route>

     </Switch>
    </Router>
      
    </>
  );
}

export default App;
