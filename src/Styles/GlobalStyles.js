import {StyleSheet} from 'react-native';
import {ColorsStyle} from '../Colors';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsStyle.whitee,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: ColorsStyle.blackPrimary,
  },
  boxContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: ColorsStyle.whitee,
  },

  textSubJudul: {
    fontSize: 12,
    fontWeight: '500',
    color: ColorsStyle.abu,
  },
  boxAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  boxCricle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: ColorsStyle.abu3,
    width: 36,
    height: 36,
  },
  boxCricle2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: ColorsStyle.redkPrimary,
    width: 36,
    height: 36,
  },

  //Page Pengikut, Komentar dan Suka

  container2: {
    height: 60,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: ColorsStyle.whitee,
  },

  boxNotif: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:16
  },
  isiNotif: {
    paddingHorizontal: 12,
    flex:1
  },
  textNotifeUser: {
    fontSize: 12,
    fontWeight: '500',
    color: ColorsStyle.black3,
  },
  textNotifeUserIsi: {
    fontSize: 12,
    fontWeight: '400',
    color: ColorsStyle.abu2,
  },
  textNotifeUserIsiTime: {
    fontSize: 12,
    fontWeight: '400',
    color: ColorsStyle.abu,
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
  textBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0A0A0A',
  },
  boxTgl:{
    backgroundColor: ColorsStyle.abu4,
    height:30,
    width:75,
    borderRadius: 8,
    justifyContent:'center',
    alignItems: 'center'
  },
  textTgl:{
    fontSize:10,
    fontWeight:'500',
    color: ColorsStyle.abu2
  },
  boxChatSistem:{
    flexDirection:'row',
    alignItems:'flex-start',
    paddingVertical:16
  },
  boxIsiChat:{
    backgroundColor: ColorsStyle.abu4,
    borderRadius:8,
    padding:8,
    flex:1,
    marginLeft:8
  },
  textIsiChat:{
    fontSize:12,
    fontWeight:'400',
    color: ColorsStyle.black3
  }
});

export default styles;
