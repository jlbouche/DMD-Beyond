import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import userService from '../../utils/userService'
import restaurantService from '../../utils/restaurantService'
import HomePage from '../HomePage/HomePage';

function App() {

  const [user, setUser] = useState(userService.getUser())  

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [restaurant, setRestaurant] = useState('')

  function handleAddressChange(e){
    setAddress(e.target.value);
  }

  function handleCityChange(e){
    setCity(e.target.value);
  }

  function handleStateCodeChange(e){
    setStateCode( e.target.value);
  }



  async function handleSubmit(e) {
    e.preventDefault();
    const currentLocation = {address: address, city: city, stateCode: stateCode};
    console.log(currentLocation)
    try {
      // refer to the utils/restaurantService, to look at the getRestaurant fetch function
      const restaurant = await restaurantService.getRestaurant(currentLocation);
      setRestaurant(restaurant);
    } catch(err){
      console.log(err.message)
    }
  };

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
        {console.log('this is the restaurant',restaurant)}
      <Switch>
          <Route exact path="/login">
            <div className="login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
             </div>
          </Route>
          <Route exact path="/signup">
            <div className="signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
             </div>
          </Route>
          {userService.getUser() ? 
            <>
                <Route exact path="/">
                  <div className="home">
                    <HomePage user={user} 
                    handleLogout={handleLogout} 
                    handleAddressChange={handleAddressChange} 
                    handleCityChange={handleCityChange} 
                    handleStateCodeChange={handleStateCodeChange} 
                    handleSubmit={handleSubmit}
                    address={address}
                    city={city}
                    stateCode={stateCode}
                    restaurant={restaurant}
                    />
                  </div>
                </Route>
                <Route path="/:username">
                  <div className="profile">
                  <ProfilePage user={user} handleLogout={handleLogout}/>
                  </div>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;