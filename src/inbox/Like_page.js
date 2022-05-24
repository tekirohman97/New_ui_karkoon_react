import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ColorsStyle} from '../Colors';
import styles from '../Styles/GlobalStyles';

const Notif = () => {
  return (
    <View style={styles.boxNotif}>
      <TouchableOpacity>
        <Image
          source={require('../Image/jne.jpeg')}
          style={{
            resizeMode: 'contain',
            width: 48,
            height: 48,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.isiNotif}>
        <Text style={styles.textNotifeUser}>arinisekar</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent:'space-between'}}>
          <Text style={styles.textNotifeUserIsi}>menyukai postingan Anda</Text>
          <Text style={styles.textNotifeUserIsiTime}>1 jam</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require('../Image/jne.jpeg')}
        style={{
          resizeMode: 'contain',
          width: 48,
          height: 48,
        }}
      />
    </View>
  );
};

export default function Like_page() {
  return (
    <View style={{paddingHorizontal: 16, backgroundColor: ColorsStyle.whitee}}>
      <View style={styles.container2}>
        <TouchableOpacity style={{marginRight: 32}}>
          <Image
            source={require('../Image/back2.png')}
            style={{resizeMode: 'contain', width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Suka</Text>
      </View>
      <View>
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
      </View>
    </View>
  );
}
