import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import LoginComponent from '../Onboarding/Login';

const w = Dimensions.get('screen').width;



const tabs = ['Post', 'Like'];

const TabProf = () => {
  const [selected, setSelected] = useState(0);

  const onScroll = ({nativeEvent}) =>{
    const index = Math.round(nativeEvent.contentOffset.x/(w-20));
  
    setSelected(index);
  }
  return (
    <View>
      <View style={styles.header}>
        {tabs.map((e, i) => (
          <Pressable onPress={() => setSelected(i)}>
            <Text style={[styles.title, selected == i && {color: 'black'}]}>
              {e}
            </Text>
            {selected == i && (
              <Image
                resizeMode="contain"
                style={{
                  height: 2,
                  width: 30,
                  marginTop: 8,
                }}
                source={require('../Image/Bar.png')}
              />
            )}
          </Pressable>
        ))}
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={onScroll}
        snapToAlignment="start"
        decelerationRate={'fast'}>
        <LoginComponent />
        <LoginComponent />
      </ScrollView>
    </View>
  );
};

export default TabProf;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    width: 40,
    height: 2,
    color: 'black',
    alignSelf: 'center',
  },
});
