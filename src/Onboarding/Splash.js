import React, {Component} from 'react';
import { StyleSheet,View, Image } from 'react-native';
import logo from '../Image/Logo.png';

const Splash = () => {
    return ( 
    <View style={styles.wrapper}>
        <Image source={logo} style={styles.logo}>

        </Image>
    </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    logo:{
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 650,
    }
})