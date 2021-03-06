import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
           render={() => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path='/profile' 
          render={() => <Profile state={props.state.profilePage}/>} />
          <Route path='/news'  />
          <Route path='/music' component={Music} />
          <Route path='/settings' />
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;
