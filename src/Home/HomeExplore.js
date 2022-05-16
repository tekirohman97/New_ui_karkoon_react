import React from 'react';
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
import GridView from '../Components/GridViewExplore';



  class Search extends React.Component {
    render() {
      return (
        <View style={styles.boxButton}>
        <TouchableOpacity style={styles.buttonSearch}>
          <Image source={require('../Image/search.png')} style={{width:16, height:16}} />
          <Text style={{fontSize:12, fontWeight: '400', color:'#C2C2C2', marginLeft: 12}}>
          cari “kulit berminyak
          </Text>
        </TouchableOpacity>
      </View>
      );
    }
  }

const homeExplore = () => {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
            <Search />
            <GridView/>
      </ScrollView>
    </View>
  );
};

export default homeExplore;

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
  boxButton: {
    justifyContent: 'center',
    flex: 1,
    height: 40,
  },
  buttonSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EDEDED',
    paddingHorizontal:16
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
