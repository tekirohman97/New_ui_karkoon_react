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
import homeExplore from './HomeExplore';
import HomeFriend from './HomeFriend';
const B = props => <Text style={{fontWeight: '600'}}>{props.children}</Text>;

class Search extends React.Component {
  render() {
    return (
      <View style={styles.boxButton}>
        <TouchableOpacity style={{paddingRight: 8}}>
          <Image
            source={require('../Image/back2.png')}
            style={{width: 24, height: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View style={styles.buttonSearch}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 16, height: 16}}
          />
          <TextInput
            placeholder="cari “kulit berminyak"
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#C2C2C2',
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <View style={{justifyContent: 'flex-start', paddingVertical: 16}}>
        <Text style={{fontSize: 10, fontWeight: '500', color: '#9E9E9E'}}>
          Lagi rame dicari
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              paddingTop: 16,
              alignItems: 'center',
            }}>
            <Text>Skincare acne prone</Text>
            <Image
              source={require('../Image/fire.png')}
              style={{
                width: 10,
                height: 10,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', width: '50%', paddingTop: 16}}>
            <Text>Skincare acne prone</Text>
          </View>
          <View style={{flexDirection: 'row', width: '50%', paddingTop: 16}}>
            <Text>Skincare acne prone</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              paddingTop: 16,
              alignItems: 'center',
            }}>
            <Text>Skincare acne prone</Text>
            <Image
              source={require('../Image/fire.png')}
              style={{
                width: 10,
                height: 10,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', width: '50%', paddingTop: 16}}>
            <Text>Skincare acne prone</Text>
          </View>
          <View style={{flexDirection: 'row', width: '50%', paddingTop: 16}}>
            <Text>Skincare acne prone</Text>
          </View>
        </View>
      </View>
    );
  }
}

const ContentType = () => {
  return (
    <View>
      <View style={{paddingVertical: 16}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
          <Text style={styles.textDeskripsi}>
            aria<B>a</B>
          </Text>
          <Image
            source={require('../Image/arrow-up-left.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
          <Text style={styles.textDeskripsi}>
            aria<B>a Grande</B>
          </Text>
          <Image
            source={require('../Image/arrow-up-left.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
          <Text style={styles.textDeskripsi}>
            aria<B>a Bekecot</B>
          </Text>
          <Image
            source={require('../Image/arrow-up-left.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../Image/search.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
          <Text style={styles.textDeskripsi}>
            aria<B>a anak pak lurah</B>
          </Text>
          <Image
            source={require('../Image/arrow-up-left.png')}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#9E9E9E '}}>
          Pengguna
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 16, alignItems: 'center'}}>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{
              width: 32,
              height: 32,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#404040',
              paddingLeft: 8,
              flex:1
            }}>
            Emina Official
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 16, alignItems: 'center'}}>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{
              width: 32,
              height: 32,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#404040',
              paddingLeft: 8,
              flex:1
            }}>
            Emina Official
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 16, alignItems: 'center'}}>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{
              width: 32,
              height: 32,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#404040',
              paddingLeft: 8,
              flex:1
            }}>
            Emina Official
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const ContentTypeClick = () => {
  return (
    <View>

    </View>
  );
};
const SearchPage = () => {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <Search />
        <ContentType />
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
    height: 26,
    borderRadius: 24,
    paddingTop: 2,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDEDED',
    width:80
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
  textDeskripsi: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
    paddingLeft: 10,
    flex: 1,
  },
});
