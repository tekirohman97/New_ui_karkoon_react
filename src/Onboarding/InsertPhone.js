import React from 'react';
import { StyleSheet,View, Image, Text, TouchableOpacity, SafeAreaView,TextInput} from 'react-native';
import bBack from '../Image/back.png';
import bendera from '../Image/bendera.png';
import botArrow from '../Image/arrow-bot.png';

const PhoneNumber = () => {
    const [number, onChangeNumber] = React.useState(null);

    return(
        <View style={styles.body}>
            <View style={styles.boxHeader}>
                <TouchableOpacity>
                    <Image source={bBack} style={{width: 15, height: 15, resizeMode: 'contain'}}> 

                    </Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.judText}>
                    Masukkan nomor telepon
            </Text>
            <Text style={styles.subJudText}>
            Masukkan nomor telepon Anda untuk kemudian melakukan verifikasi.
            </Text>
            <SafeAreaView style={styles.formInput}>
                <View style={styles.boxSb}>
                    <Image source={bendera} style={styles.bendera}></Image>
                    <Text>
                        +62
                    </Text>
                    <Image source={botArrow} style={styles.botArrow}></Image>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="123-4567-8912"
                    keyboardType="numeric"
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                Kirim kode OTP
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default PhoneNumber;

const styles = StyleSheet.create({
    body:{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        flexDirection: 'column',
        height:'100%'
    },
    boxHeader:{
        height: 56,
        width: '100%',   
        justifyContent: 'center',
    },
    judText:{
        fontSize:16,
        fontWeight: '600',
        color: '#0A0A0A',
        marginTop: 28,
    },
    subJudText:{
        fontWeight:'400',
        fontSize:14,
        color: '#616161',
        marginTop: 8,
    },
    formInput:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'#C2C2C2',
        marginTop:30,
        borderRadius:4,
    },
    boxSb:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },

    bendera:{
        width:30,
        height:30,
        resizeMode: 'contain',
        marginRight:5
    },
    botArrow:{
        width:15,
        height:15,
        resizeMode: 'contain',
        marginHorizontal:10
    },
    input: {
        height: 45,
        borderWidth: 0,
        padding: 10,
        marginTop: 0,
        flex:1

    },
    button: {
        marginTop: 20,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        height: 50,
        width:'100%',
        borderRadius:4,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#EDEDED',
        shadowColor: '#E0E0E0',
        shadowOpacity: 0.01,
        elevation: 10,
        shadowRadius: 4 ,
        shadowOffset : { width: 0, height: 1},
      },

      textButton:{
          color: '#9E9E9E',
          fontWeight: '700',
          fontSize:14,
      }

})