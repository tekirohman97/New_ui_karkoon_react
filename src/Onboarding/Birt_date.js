import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaViewcond,
} from 'react-native';
import bBack from '../Image/back.png';

const birtDay = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.body}>
      <View style={styles.boxHeader}>
        <TouchableOpacity>
          <Image
            source={bBack}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
            }}>
            {' '}
          </Image>{' '}
        </TouchableOpacity>{' '}
      </View>{' '}
      <Text style={styles.judText}> Masukkan tanggal lahir </Text>{' '}
      <Text style={styles.subJudText}>
        Tanggal lahir kamu tidak akan ditampilkan ke publik{' '}
      </Text>{' '}
      <SafeAreaView style={styles.formInput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
        />
      </SafeAreaView>{' '}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> Selanjutnya </Text>{' '}
      </TouchableOpacity>{' '}
    </View>
  );
};

export default birtDay;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'column',
    height: '100%',
  },
  boxHeader: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
  },
  judText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A0A0A',
    marginTop: 28,
  },
  subJudText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#616161',
    marginTop: 8,
  },
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    marginTop: 30,
    borderRadius: 4,
  },
  boxSb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bendera: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 5,
  },
  botArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  input: {
    height: 45,
    borderWidth: 0,
    padding: 10,
    marginTop: 0,
    flex: 1,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#EDEDED',
    shadowColor: '#E0E0E0',
    shadowOpacity: 0.01,
    elevation: 10,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  textButton: {
    color: '#9E9E9E',
    fontWeight: '700',
    fontSize: 14,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellViews: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  callText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
