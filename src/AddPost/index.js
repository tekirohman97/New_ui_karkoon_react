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

class TopHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{width: 30, height: 30}}>
          <Image
            source={require('../Image/back2.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: 30, height: 30}}>
          <Image
            source={require('../Image/check.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const UselessTextInput = props => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={80}
      placeholder="Tambahkan judul..."
      placeholderTextColor={'#C2C2C2'}
      style={{width: 230, paddingLeft:16, fontSize:12, fontWeight:'500', color:'black'}}
    />
  );
};
const UselessTextInput2 = props => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={150}
      placeholder="Tambahkan deskripsi post..."
      placeholderTextColor={'#C2C2C2'}
      style={{width: '100%', paddingLeft:16, fontSize:12, fontWeight:'500', color:'black'}}
    />
  );
};

const ContentPost = () => {
  const [value, onChangeText] = React.useState('');
  const [valuee, onChangeText2] = React.useState('');
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', height: 70, justifyContent:'flex-start'}}>
        <TouchableOpacity>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{height: 70, width: 70, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#fff',
            height:70
          }}>
          <UselessTextInput
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
      </View>
      <View
          style={{
            backgroundColor: '#fff',
            height:90
          }}>
          <UselessTextInput2
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText2(text)}
            value={valuee}
          />
        </View>
        <TouchableOpacity style={{flexDirection:'row', height:40, alignItems: 'center'}}>
            <Image source={require('../Image/map-pin.png')} style={{width:14, height:14, resizeMode:'contain'}}/>
            <Text style={{fontSize:12, fontWeight:'500', color:'#C2C2C2', paddingLeft:6, flex:1}}>
            Tambahkan lokasi
            </Text>
            <Image source={require('../Image/next.png')} style={{width:10, height:10, resizeMode:'contain'}}/>
        </TouchableOpacity>
    </View>
  );
};

const AddPost = () => {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <TopHeader />
        <ContentPost />
      </ScrollView>
    </View>
  );
};

export default AddPost;

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
});
