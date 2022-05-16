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
  SafeAreaView,TextInput
} from 'react-native';
import bendera from '../Image/bendera.png';
const B = props => <Text style={{fontWeight: '600'}}>{props.children}</Text>;

class Top extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.topHeader}>
        <TouchableOpacity>
          <Image
            source={require('../Image/back.png')}
            style={{height: 12, width: 12, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 18}}>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{width: 36, height: 36, borderRadius: 50}}
          />
        </TouchableOpacity>
        <View style={styles.boxUserName}>
          <Text style={styles.textUser}>Vhalenza A. K</Text>
          <Text style={styles.textUser2}>@valenzaa.k</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Follow</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Coment extends React.Component {
    state = {  } 
    render() { 
        return (
            <View style={{paddingHorizontal: 16}}>
          <View
            style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 16}}>
            <TouchableOpacity>
              <Image
                source={require('../Image/jne.jpeg')}
                style={{width: 36, height: 36, borderRadius: 50}}
              />
            </TouchableOpacity>
            <View style={{flex: 1, marginLeft: 8}}>
              <TouchableOpacity>
                <Text style={styles.textDeskripsi}>
                  <B>alisha.yndnr</B> Gonna ATE UP euphoria{' '}
                </Text>
              </TouchableOpacity>
              <View style={{flexDirection:'row', marginTop:5}}>
                <Text style={styles.textLinkKomen}>
                    1 jam
                </Text>
                <TouchableOpacity style={{marginLeft:12}}>
                    <Text style={styles.textLinkKomen}>
                        Balas
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop:5
              }}>
              <Image
                source={require('../Image/love_line.png')}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        );
    }
}
 

class Content extends React.Component {
  render() {
    return (
      <ScrollView style={styles.boxContent}>
        <Image
          source={require('../Image/jne.jpeg')}
          style={{width: '100%', height: 360, resizeMode: 'contain'}}
        />
        <View style={styles.boxAction}>
          <TouchableOpacity style={styles.action}>
            <Image
              source={require('../Image/love_line.png')}
              style={styles.iconAction}
            />
            <Text style={styles.textAction}>65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Image
              source={require('../Image/komen_line.png')}
              style={styles.iconAction}
            />
            <Text style={styles.textAction}>65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Image
              source={require('../Image/eye_line.png')}
              style={styles.iconAction}
            />
            <Text style={styles.textAction}>65</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxDeskription}>
          <View>
            <TouchableOpacity>
              <Text style={styles.textDeskripsi}>
                <B>alisha.yndnr</B> Gonna ATE UP euphoria high party dawd
                dawdawdawdaw dawdawdwa
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textLinkKomen}>15 jan</Text>
        </View>
        <Coment/>
        <Coment/>
        <Coment/>
        <Coment/>
        <Coment/>
        <Coment/>
      </ScrollView>
    );
  }
}

class InputKomen extends React.Component {
    state = {  } 
    render() { 
        return (
              <View style={{flexDirection:'row', height:56, backgroundColor:'white'}}>
                  <Text>
                      dhwadw
                  </Text>
              </View>  
        );
    }
}
 
const DetailPost = () => {
  return (
    <View>
      <Top />
      <Content />
      <InputKomen/>
    </View>
  );
};

export default DetailPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  topHeader: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  boxUserName: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 8,
    flex: 1,
  },

  textUser: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0A0A0A',
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0A0A0A',
  },
  button: {
    borderWidth: 1,
    borderColor: '#EDEDED',
    width: 80,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textUser2: {
    fontSize: 10,
    fontWeight: '400',
    color: '#9E9E9E',
  },
  imagePost: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
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
  boxAction: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  boxContent: {
    height: '100%',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconAction: {
    width: 18,
    height: 14,
    resizeMode: 'contain',
  },
  textAction: {
    fontSize: 12,
    fontWeight: '400',
    color: '#757575',
    marginLeft: 5,
  },
  boxDeskription: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  deskripsi: {
    flexDirection: 'row',
  },
  textDeskripsi: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
  },
  textLinkKomen: {
    fontSize: 10,
    fontWeight: '400',
    paddingTop: 4,
    color: '#9E9E9E',
  },
});
