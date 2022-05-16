import  React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import TabProf from '../Components/TabViewProfile';
import bBack from '../Image/back.png';
import bendera from '../Image/bendera.png';
import botArrow from '../Image/arrow-bot.png';



const homePage = () => {
  
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <View style={styles.boxHeader}>
          <Image
            resizeMode="cover"
            style={{
              height: 70,
              width: 70,
              borderRadius: 50,
            }}
            source={require('../Image/jne.jpeg')}
          />
          <View style={styles.boxNamaUser}>
            <Text style={styles.name}>Jenny Wilson</Text>
            <Text style={styles.userName}>@jennywill</Text>
          </View>
          <TouchableOpacity style={styles.buttonSetting}>
            <Image
              resizeMode="cover"
              style={{
                height: 16,
                width: 16,
              }}
              source={require('../Image/settings.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxBio}>
          <Text style={styles.bio}>
            Not really an influencer but loves to influence people
          </Text>
        </View>
        <View
          style={{
            height: 35,
            width: '100%',
            paddingVertical: 8,
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, fontWeight: '600', color: '#404040'}}>
              980
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#9E9E9E',
                marginLeft: 4,
              }}>
              Pengikut
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{fontSize: 12, fontWeight: '600', color: '#404040'}}>
              980
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#9E9E9E',
                marginLeft: 4,
              }}>
              Mengikuti
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{fontSize: 12, fontWeight: '600', color: '#404040'}}>
              980
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#9E9E9E',
                marginLeft: 4,
              }}>
              Disukai
            </Text>
          </View>
        </View>
        <View style={{height: 50, paddingVertical: 8, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#404040'}}>
              Kirim kode OTP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Image
              resizeMode="contain"
              style={{
                height: 15,
                width: 15,
              }}
              source={require('../Image/arrow-bot.png')}
            />
          </TouchableOpacity>
        </View>
        <TabProf />
        
      </ScrollView>
    </View>
  );
};

export default homePage;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'column',
  },
  boxHeader: {
    height: 70,
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  boxNamaUser: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 8,
    paddingTop: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#404040',
  },
  userName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9E9E9E',
    paddingTop: 8,
  },
  buttonSetting: {
    width: 20,
  },
  boxBio: {
    paddingTop: 12,
    paddingBottom: 8,
    width: '100%',
  },
  bio: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
  },
  button: {
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: 24,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDEDED',
    flex: 1,
  },
  button2: {
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    width: 31,
    height: 40,
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
});
