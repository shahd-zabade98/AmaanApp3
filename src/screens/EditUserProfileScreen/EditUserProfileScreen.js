import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';


export default function EditUserProfileScreen({route,navigation}) {
    const [fullName, setFullName] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone, setPhone] = useState('')
    const [NumOfFamily, setNumOfFamily] = useState('')
    
    const InfoRef = firebase.firestore().collection('UserInfo')
    let userID= route.params;
    
   /* useEffect(() => {
        InfoRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])*/
    const onSubmitPress = () => {
        
            //const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data1 = {
                fullName,
                Address,
                Phone,
                NumOfFamily,
                authorID: userID,
                //createdAt: timestamp,
            };
            InfoRef
                
                
                .add(data1)
                .then(_doc => {
                    setFullName('')
                    Keyboard.dismiss()
                    setAddress('')
                    Keyboard.dismiss()
                    setPhone('')
                    Keyboard.dismiss()
                    setNumOfFamily('')
                    Keyboard.dismiss()
                    //navigation.navigate("UserProfile", {info: data1})
                })

                .catch((error) => {
                    alert(error)
                });
        
    }

 return(
  
    <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
                <View style={styles.action}>
                <FontAwesome name="user" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
              </View>
              <View style={styles.action}>
              <Entypo name="location-pin" size={24} color="black" />
               
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setAddress(text)}
                    value={Address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                 </View>
                 <View style={styles.action}>
                 <Entypo name="phone" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setPhone(text)}
                    value={Phone}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType='number-pad'
                />
              </View>
              <View style={styles.action}>
              <MaterialIcons name="family-restroom" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Number of family members"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setNumOfFamily(text)}
                    value={NumOfFamily}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType='number-pad'
                />
               </View>
               
               <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSubmitPress ()}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>

             </KeyboardAwareScrollView>
        </View> 
    )


}
 