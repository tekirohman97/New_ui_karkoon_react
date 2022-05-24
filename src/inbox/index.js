import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ColorsStyle} from '../Colors';
import styles from '../Styles/GlobalStyles';

export default function InboxPage() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Notifikasi</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.textSubJudul}>Aktifitas</Text>
        <TouchableOpacity style={styles.boxAction}>
          <View style={styles.boxCricle}>
            <Image
              source={require('../Image/pengikut.png')}
              style={{resizeMode: 'contain', width: 20, height: 20}}
            />
          </View>
          <View style={{paddingLeft: 12, flex:1}}>
            <Text style={{fontSize:14, fontWeight:'400', color:ColorsStyle.black2}}>Pengikut</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:ColorsStyle.abu}}>Tidak ada notifikasi baru</Text>
          </View>
          <Image
              source={require('../Image/next.png')}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxAction}>
          <View style={styles.boxCricle}>
            <Image
              source={require('../Image/komentar.png')}
              style={{resizeMode: 'contain', width: 20, height: 20}}
            />
          </View>
          <View style={{paddingLeft: 12, flex:1}}>
            <Text style={{fontSize:14, fontWeight:'400', color:ColorsStyle.black2}}>Komentar</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:ColorsStyle.abu}}>Tidak ada notifikasi baru</Text>
          </View>
          <Image
              source={require('../Image/next.png')}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxAction}>
          <View style={styles.boxCricle}>
            <Image
              source={require('../Image/suka.png')}
              style={{resizeMode: 'contain', width: 20, height: 20}}
            />
          </View>
          <View style={{paddingLeft: 12, flex:1}}>
            <Text style={{fontSize:14, fontWeight:'400', color:ColorsStyle.black2}}>Suka</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:ColorsStyle.abu}}>Tidak ada notifikasi baru</Text>
          </View>
          <Image
              source={require('../Image/next.png')}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
        </TouchableOpacity>
        <Text style={styles.textSubJudul}>Sistem</Text>
        <TouchableOpacity style={styles.boxAction}>
          <View style={styles.boxCricle2}>
            <Image
              source={require('../Image/karkoon_circle.png')}
              style={{resizeMode: 'contain', width: 20, height: 20}}
            />
          </View>
          <View style={{paddingLeft: 12, flex:1}}>
            <Text style={{fontSize:14, fontWeight:'400', color:ColorsStyle.black2}}>Karkoon Indonesia</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:ColorsStyle.abu}}>Hi, selamat datang di Karkoon Indonesia!...</Text>
          </View>
          <Image
              source={require('../Image/next.png')}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
