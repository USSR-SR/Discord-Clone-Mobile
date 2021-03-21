import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Header=(props)=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>#{props.title}</Text>
      </View>
  );
};
Header.defaultProps = {
    title: 'Channel-Name'
}



const styles = StyleSheet.create({
  header: {
    height:50,
    width:350,
    padding:10,
    backgroundColor: '#851e3e',
    marginLeft:50,
    marginTop:-45
    
  },
  text:{
    margin:0,
    height:30,
      color:'#ffcc5c',
      fontSize:20,
      textAlign:'left',
    //   borderWidth:2,
    // borderColor:'black',
  },
  btn: {
    width:40,
    height:40,
    backgroundColor: '#451e3e',
    padding: 9,
    margin: 5,
    // borderWidth:2,
    // borderColor:'black',
    borderRadius: 30,

  },
  btnText: {
    color: '#f6cd61',
    fontSize: 20,
    textAlign: 'center',
    borderRadius:30,
    borderColor:'black',
  },
});

export default Header;

