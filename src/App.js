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
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
          <Route path='/news'  />
          <Route path='/music' component={Music} />
          <Route path='/settings' />
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;
