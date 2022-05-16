import React, {Component} from 'react';
import { StyleSheet,View, Image, Text, TouchableOpacity} from 'react-native';
import logo from '../Image/k_Logo.png';
import gLogo from '../Image/google_logo.png';
import fLogo from '../Image/facebook_logo.png';
import tLogo from '../Image/tiktok_logo.png';
import hLogo from '../Image/hp_logo.png';

const LoginComponent = () => {
    return ( 
    <View style={styles.wrapper}>
        <View style={styles.boxlogotop}>
            <Image source={logo} style={styles.logok}></Image>
        </View>
        <Text style={styles.textJudul}>
            {'Selamat datang di \nKarkoon'}
        </Text>
        <TouchableOpacity style={styles.button}>
            <Image source={gLogo} style={{width: 20, height: 20, marginRight: 11}}>

            </Image>
            <Text style={styles.textButton}>
            Lanjutkan dengan Google
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Image source={fLogo} style={{width: 20, height: 20, marginRight: 11}}>

            </Image>
            <Text style={styles.textButton}>
            Lanjutkan dengan Facebook
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Image source={tLogo} style={{width: 20, height: 20, marginRight: 11}}>

            </Image>
            <Text style={styles.textButton}>
            Lanjutkan dengan TikTok
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Image source={hLogo} style={{width: 20, height: 20, marginRight: 11}}>

            </Image>
            <Text style={styles.textButton}>
            Lanjutkan dengan Nomor Telepon
            </Text>
        </TouchableOpacity>
    </View>
    );
};

export default LoginComponent;

const styles = StyleSheet.create({
    logo:{
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    wrapper:{
        justifyContent: 'flex-start',
        flexDirection:'column',
        padding: 16,
    },
    boxlogotop:{
        alignItems: 'center',
        marginTop: 40,
    },
    logok:{
        height:50,
        width: 50,
        resizeMode: 'contain',
    },
    textJudul:{
        fontSize: 28,
        fontWeight:'600',
        color: '#404040',
        marginTop: 50,
        marginBottom: 12,
    },
    button: {
        marginTop: 20,
        paddingHorizontal: 18,
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',
        height: 40,
        width:'100%',
        borderRadius:4,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.01,
        elevation: 10,
        shadowRadius: 4 ,
        shadowOffset : { width: 0, height: 1},
      },

      textButton:{
          fontSize: 14,
          fontWeight: '600',
          color: '#404040',
      }

})