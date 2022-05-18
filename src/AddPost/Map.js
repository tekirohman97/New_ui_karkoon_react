import React from 'react';
import {
  View,
  useWindowDimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import bendera from '../Image/bendera.png';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.buttonSearch}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 16, height: 16}}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#C2C2C2',
              marginLeft: 12,
            }}>
            cari lokasi
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const HasilPencarian = () => {
  return (
    <View style={{paddingVertical: 20}}>
      <Text style={styles.textLoc}>Jakarta</Text>
      <View style={{paddingBottom:12}}>
        <Text style={styles.textLocBesar}>Jakarta Pusat, DKI Jakarta, Indonesia</Text>
        <Text style={styles.textLoc}>Jakarta</Text>
      </View>
      <View style={{paddingBottom:12}}>
        <Text style={styles.textLocBesar}>Monumen Nasional, Gambir, Jakarta Pusat</Text>
        <Text style={styles.textLoc}>Monumen Nasional, Gambir, DKI Jakarta</Text>
      </View>
      <View style={{paddingBottom:12}}>
        <Text style={styles.textLocBesar}>Bundaran HI, Jakarta</Text>
        <Text style={styles.textLoc}>Gondangdia, Menteng, Jakarta Pusat, DKI Jakarta</Text>
      </View>
      <View style={{paddingBottom:12}}>
        <Text style={styles.textLocBesar}>Stasiun MRT Bundaran HI</Text>
        <Text style={styles.textLoc}>Gondangdia, Menteng, Jakarta Pusat, DKI Jakarta</Text>
      </View>
    </View>
  );
};

class TopHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{width: 30, height: 30}}>
          <Image
            source={require('../Image/x.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#0A0A0A',
              paddingBottom: 7,
            }}>
            Pilih Lokasi
          </Text>
        </View>
        <TouchableOpacity style={{width: 30, height: 30}}>
          <Image
            source={require('../Image/refresh.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const MapPage = () => {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <TopHeader />
        <Search />
        <HasilPencarian />
      </ScrollView>
    </View>
  );
};

export default MapPage;

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
  },
  boxButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
  },
  buttonSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    borderColor: '#EDEDED',
    paddingHorizontal: 16,
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
    flexDirection: 'row',
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

  textLoc: {
    fontSize: 10,
    fontWeight: '400',
    color: '#9E9E9E',
    paddingBottom:8
  },
  textLocBesar: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
  },
});
