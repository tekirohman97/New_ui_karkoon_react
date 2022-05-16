import React from 'react';
import { View, useWindowDimensions , Image, Text} from 'react-native';

const HomeMt = () =>{
    return(
        <View style={{flex:1, marginTop: 150, alignItems: 'center', flexDirection: 'column'}}>
            <Image source={require('../Image/mt_home.png')} style={{height:216, width:216}}/>
            <Text style={{fontSize: 16, fontWeight: '600', color:'#0A0A0A', marginTop: 20}}>
            Belum ada yang kamu follow
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color:'#616161', marginTop:8}}>
            Kamu akan melihat postingan temanmu di sini
            </Text>
        </View>
    )
}

export default HomeMt;