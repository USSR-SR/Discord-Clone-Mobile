import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    height:60,
    padding:10,
    backgroundColor: '#851e3e'
  },
  text:{
      color:'#ffcc5c',
      fontSize:20,
      textAlign:'center'
  }
});

export default Header;