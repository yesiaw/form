import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'
import CurrentPage from './CurrentPage';

import Register from './forms/register';
import Login from './forms/Login-form/login';
import UsersContainer, { Users } from './users/users';
import ProfileContainer from './profile/profile';







const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='app-container'>
          <CurrentPage />

          <Route path='/register' render={() => <Register />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path='/login' render={() => <Login />} />
          <div>
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
