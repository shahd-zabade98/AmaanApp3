import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import * as  Notifications from 'expo-notifications';
//import Permissions from 'expo-permissions';
import AwesomeButton from 'react-native-really-awesome-button';
//import { Expo } from 'expo-server-sdk';
export default function HomeStatusScreen() {
  
    const reference = firebase.database().ref('sensors/');
    //const { Expo } = require('expo-server-sdk');

   const onSubmitPress = () => {
        reference 
       .on('value', (snapshot) => {
           //const SensVal = snapshot.val();
          const words = (snapshot.val()).split(',');
           setData(words);
           console.log("Room1: " + words[0]);
         
         });
     }
    /* const sendNotification = async() =>{
       const message ={
         to: "ExponentPushToken[Zqgq6UPl1_64Px6wFqbgeN]",
         sound: "defult",
         body:"there is a fire",
       };
       await fetch('https://exp.host/--/api/v2/push/send', {

            method: "POST",
            headers: {
                "host" :"exp.host",
               "accept-encoding":"gzip,deflate",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });
       
       };*/
     /*const sendNotificationtoAllUsers = async() =>{
       const users = await firebase.firestore().collection("users").get();
       users.docs.map((user) => sendNotification(user.data().token.data));
     };*/
    /* useEffect(() => {
        reference
          .on('value', snapshot => {
            const response = snapshot.val();
            //console.log(response);
            const keys = Object.keys(response);
            const questWithKeys = keys.map(id => {
            return { ...response[id], id }
            });
            setData(questWithKeys);
            console.log(questWithKeys); 
            //return { data: questWithKeys };
                
          
          });
      
    }, []);*/
      
    



     return (
        

             <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

               
                    <View style={styles.button}>
               
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onSubmitPress() 
                    next(); }}> Status </AwesomeButton>
                 
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user" size={24} color="black" />
                    
       
      
                    <Text style={styles.text}>sss  </Text>
                  </View>
                  
                  
                </KeyboardAwareScrollView>
                </View>
               
  );
}

