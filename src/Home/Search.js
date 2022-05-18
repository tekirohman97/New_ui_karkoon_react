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
        <TouchableOpacity style={{paddingRight:8}}>
            <Image source={require('../Image/back2.png')} style={{width:24, height:24, resizeMode:'contain'}}/>
        </TouchableOpacity>
        <View style={styles.buttonSearch}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 16, height: 16}}
          />
          <TextInput placeholder='cari “kulit berminyak' style={{fontSize:12, fontWeight:'400', color:'#C2C2C2', paddingLeft:10}}/>
        </View>
      </View>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <View style={{justifyContent:'flex-start', paddingVertical:16}}>
          <Text style={{fontSize:10, fontWeight:'500', color:'#9E9E9E'}}>
              Lagi rame dicari
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', }}>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16, alignItems:'center'}}>
                <Text>
                Skincare acne prone
                </Text>
                <Image source={require('../Image/fire.png')} style={{width:10, height:10, resizeMode:'contain', marginLeft:5}}/>
            </View>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16}}>
                <Text>
                Skincare acne prone
                </Text>
            </View>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16}}>
                <Text>
                Skincare acne prone
                </Text>
            </View>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16, alignItems:'center'}}>
                <Text>
                Skincare acne prone
                </Text>
                <Image source={require('../Image/fire.png')} style={{width:10, height:10, resizeMode:'contain', marginLeft:5}}/>
            </View>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16}}> 
                <Text>
                Skincare acne prone
                </Text>
            </View>
            <View style={{flexDirection:'row', width:'50%',paddingTop:16}}>
                <Text>
                Skincare acne prone
                </Text>
            </View>
          </View>
      </View>
    );
  }
}

const SearchPage = () => {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <Search />
        <Content/>
      </ScrollView>
    </View>
  );
};

export default SearchPage;

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
    alignItems:'center',
    height: 40,
    flexDirection:'row'
  },
  buttonSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flex:1,
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
    flexDirection:'row'
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
