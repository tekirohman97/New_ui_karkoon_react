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
import GridViewBox from './BoxGridView';

const GridView = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 16,
      }}>
          <GridViewBox/>
          <GridViewBox/>
          <GridViewBox/>
          <GridViewBox/>
          <GridViewBox/>

      </View>
  );
};

export default GridView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
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
    paddingTop: 4,
    color: '#9E9E9E',
  },
});
