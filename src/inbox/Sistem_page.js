import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ColorsStyle} from '../Colors';
import styles from '../Styles/GlobalStyles';

const Chat = () => {
  return (
    <View style={styles.boxChatSistem}>
      <TouchableOpacity style={styles.boxCricle2}>
        <Image
          source={require('../Image/karkoon_circle.png')}
          style={{resizeMode: 'contain', width: 20, height: 20}}
        />
      </TouchableOpacity>
      <View style={styles.boxIsiChat}>
          <Text style={styles.textIsiChat}>
          Hi! Selamat datang di Karkoon!
Kamu bisa mendapatkan banyak informasi dan pengalaman menarik tentang beauty product yang lagi trending dari komunitas mulai dari skincare, review produk dari brand lokal maupun luar negeri.
          </Text>
      </View>
    </View>
  );
};

export default function Like_page() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        backgroundColor: ColorsStyle.whitee,
        height: '100%',
      }}>
      <View style={styles.container2}>
        <TouchableOpacity style={{marginRight: 32}}>
          <Image
            source={require('../Image/back2.png')}
            style={{resizeMode: 'contain', width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Sistem</Text>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.boxTgl}>
            <Text style={styles.textTgl}>02/02/2022</Text>
          </View>
        </View>
        <Chat />
        <Chat />
      </View>
    </View>
  );
}
