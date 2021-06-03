import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegistrationScreen1,MainScreen,FireProfileScreen ,RegistrationScreen,EditUserProfileScreen,ControlScreen, UserProfileScreen ,HomeStatusScreen} from './src/screens'
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config';


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();
export default function App(){ 
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)

    /*if (loading) {	
        return (	
          <></>	
        )	
      }

      useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            usersRef
              .doc(user.uid)
              .get()
              .then((document) => {
                const userData = document.data()
                setLoading(false)
                setUser(userData)
              })
              .catch((error) => {
                setLoading(false)
              });
          } else {
            setLoading(false)
          }
        });
      }, []);
    
*/
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Registration'>
    <Stack.Screen name="Registration" component={MainScreen} />
      <Stack.Screen name="HomeOwner" title="Home Owner" component={RegistrationScreen} />
          <Stack.Screen name="Firefighter" title="Firefighter" component={RegistrationScreen1} options={{
headerStyle:{
backgroundColor:'#e9967a'
},
headerTintColor:'white',
headerTitleStyle:{
fontWeight:'bold'
}
}} />
         
         
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="EditUserProfile" component={EditUserProfileScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="HomeStatus" component={HomeStatusScreen} />
            <Stack.Screen name="Control" component={ControlScreen} />
            <Stack.Screen name="Information" options={{
headerStyle:{
backgroundColor:'#e9967a'
},
headerTintColor:'white',
headerTitleStyle:{
fontWeight:'bold'
}
}}component={FireProfileScreen} />
    </Stack.Navigator>
       
      
       
    </NavigationContainer>
    
  );
  

}

import {Platform, InteractionManager} from 'react-native';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}