import React, { useState } from 'react';
import { Image,Keyboard, Text, TextInput, TouchableOpacity, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import AwesomeButton from 'react-native-really-awesome-button';
export default function ControlScreen() {
    const refdoor = firebase.database().ref('doors/');
    const reflight = firebase.database().ref('lights/');
    const refwindow = firebase.database().ref('windows/');

  const onOpenDoor = () => {
refdoor
.update({
   
     value:"1"
})
  .then(() => console.log('Data updated.'));
  //alert("The door has been opened!");
}

const onCloseDoor = () =>{
    refdoor
    .update({
       
         value:"0"
    })
      .then(() => console.log('Data updated.'));
     // alert("The door has been closed!");
}
const onOpenLights = () =>{
    reflight
    .update({
       
         value:"1"
    })
      .then(() => console.log('Data updated.'));
      //alert("The lights are turned on!");
}
const onCloseLights = () =>{
    reflight
    .update({
       
         value:"0"
    })
      .then(() => console.log('Data updated.'));
      //alert("The lights are turned off!");
}
const onOpenWindow = () =>{
    refwindow
    .update({
       
         value:"1"
    })
      .then(() => console.log('Data updated.'));
      //alert("The windows have been opened!");

}
const onCloseWindow = () =>{
    refwindow
    .update({
       
         value:"0"
    })
      .then(() => console.log('Data updated.'));
      //alert("The windows have been closed!");
}

     return (
         
              <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                    <View style={styles.action}>
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onOpenDoor() 
                    next(); }}> Open Door </AwesomeButton>
                  
                   <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onCloseDoor() 
                    next(); }}> Close Door </AwesomeButton>
                    </View>

                    <View style={styles.action}>
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onOpenLights() 
                    next(); }}> Open Lights </AwesomeButton>
                 <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onCloseLights() 
                    next(); }}> Close Lights </AwesomeButton>
                    </View>
                    
                    <View style={styles.action}>
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onOpenWindow() 
                    next(); }}> Open Windows </AwesomeButton>
                 <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onCloseWindow() 
                    next(); }}> Close Windows </AwesomeButton>
                    </View>
                    
                </KeyboardAwareScrollView>
                </View>
               
  );
}

