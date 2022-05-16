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

const GridViewBox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image
        source={require('../Image/jne.jpeg')}
        style={{width: '100%', resizeMode: 'cover', height: 210,borderTopLeftRadius: 4, borderTopRightRadius:4}}
      />
      </TouchableOpacity>
      <Text style={styles.textDeskripsi}>
        Guasha tuh emang ternyata berguna banget buat muka
      </Text>
      <View style={styles.boxUser}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            source={require('../Image/jne.jpeg')}
            style={{width: 16, height: 16, borderRadius: 50}}
          />
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: '#616161',
              marginLeft: 4,
            }}>
            alisha.yndnr
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Image
            source={require('../Image/love_line.png')}
            style={styles.iconAction}
          />
          <Text style={styles.textAction}>65</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GridViewBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '49%',
    borderRadius: 10,
    backgroundColor:'white',
    marginBottom: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 2,
  },
  boxUser: {
    width: '100%',
    backgroundColor:'white',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4
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
    fontSize: 10,
    fontWeight: '400',
    color: '#404040',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  textLinkKomen: {
    fontSize: 10,
    fontWeight: '400',
    paddingTop: 4,
    color: '#9E9E9E',
  },
});
