import React from 'react';
import {
  View,
  useWindowDimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
const B = props => <Text style={{fontWeight: '600'}}>{props.children}</Text>;

const PostHomeFriend = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Image
          source={require('../Image/jne.jpeg')}
          style={{width: 24, height: 24, borderRadius: 50}}
        />
        <Text style={styles.textUser}>valenzaa.k</Text>
        <TouchableOpacity>
          <Image
            source={require('../Image/more.png')}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('../Image/jne.jpeg')} style={styles.imagePost} />
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
        <TouchableOpacity>
          <Text style={styles.textLinkKomen}>Lihat semua komentar</Text>
        </TouchableOpacity>
        <View>
          <View style={{flexDirection: 'row', alignItems:'center', marginTop:4}}>
            <TouchableOpacity style={{flex: 1}}>
              <Text style={styles.textDeskripsi}>
                <B>alisha.yndnr</B> Gonna ATE UP euphoria{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40, justifyContent: 'center', alignItems:'center'}}>
              <Image
                source={require('../Image/love_line.png')}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', marginTop:4}}>
            <TouchableOpacity style={{flex: 1}}>
              <Text style={styles.textDeskripsi}>
                <B>alisha.yndnr</B> Gonna ATE UP euphoria{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40, justifyContent: 'center', alignItems:'center'}}>
              <Image
                source={require('../Image/love_line.png')}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textLinkKomen}>
            15 jan
        </Text>
      </View>
    </View>
  );
};

export default PostHomeFriend;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  topHeader: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  textUser: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0A0A0A',
    flex: 1,
    marginLeft: 8,
  },
  textUser2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0A0A0A',
    marginLeft: 8,
  },
  imagePost: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
  },
  boxAction: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
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
    paddingTop:4,
    color: '#9E9E9E',
  },
});
