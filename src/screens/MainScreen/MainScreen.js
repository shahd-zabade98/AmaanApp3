import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
//import { FontAwesome5,FontAwesome } from '@expo/vector-icons';

export default function MainScreen({navigation}) {
    

    

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onHomeOwnerPress = () => {
        navigation.navigate('HomeOwner')  
    }
    const onFirefighterPress = () => {
        navigation.navigate('Firefighter')  
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onHomeOwnerPress()}>
                    <Text style={styles.buttonTitle}>Sign up as a home owner</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onFirefighterPress()}>
                    <Text style={styles.buttonTitle}>Sign up as a firefighter</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
