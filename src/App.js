import { Route, Routes,} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Options from './components/Options/Options';
import {initializeApp} from './redux/app-reducer'
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

const  App = React.memo(props => {

  useEffect( () => {
    props.initializeApp()
  // eslint-disable-next-line
  }, [] )

  if(!props.initialized) {
    return <Preloader />
  } 

  if(!props.isAuth && props.initialized) {
    return (
      <div>
        <HeaderContainer />
        <LoginPage />
      </div>
    )
  } 

  
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />


        
        <div className='container'>
          <NavbarContainer  /> 

          <Suspense fallback={<Preloader />}>
              
              <Routes>
                <Route path='/myProfile' element={<ProfileContainer   />} />
                <Route path='/profile/:id' element={<ProfileContainer   />} />
                <Route path='/dialogs/*' element={<DialogsContainer  />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/news' element={<News/>} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Options />} />
                <Route path='/login' element={<LoginPage />} />
                <Route exact path ='*' element={<ProfileContainer   />}/>
              </Routes>
            
          </Suspense>
        </div>
        
          
          
          
        
      </div>
    
  );
})

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
  initializeApp,
})(App) 




