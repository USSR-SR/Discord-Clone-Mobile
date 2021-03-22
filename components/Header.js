import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Button,Animated, Easing, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
// import menuButton from '../homeStack';


const Header=(props)=>{

  function MenuButton (){
    const navigation = useNavigation();
     return(
         <TouchableOpacity
         style={styles.btn}
         onPress={() => {
               navigation.navigate('Menu');
         }
       }>
         <Text>
         <Text style={styles.btn1text}>{`@`}</Text>
         </Text>
       </TouchableOpacity>
     )
}

function MembersButton (){
  const navigation = useNavigation();
   return(
       <TouchableOpacity
       style={styles.btn}
       onPress={() => {
             navigation.navigate('Members');
       }
     }>
       <Text>
       <Text style={styles.btn1text}>{`#`}</Text>
       </Text>
     </TouchableOpacity>
   )
}

  return (
    
    <View style={styles.header}>
      <MenuButton/>
      <Text style={styles.text}>#{props.title}</Text> 
      <MembersButton/>

      </View>
  );
};
Header.defaultProps = {
    title: 'Channel-Name'
}



const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    height:60,
    width:400,
    padding:5,
    backgroundColor: '#700e2e',
    borderBottomWidth:4,
     
  },
  text:{
    margin:0,
    height:30,
    width:210,
      color:'#ffcc5c',
      fontSize:20,
      textAlign:'left',
      margin:10,
  },
  btn: {
    width:50,
    height:50,
    marginHorizontal:20,
    backgroundColor: '#700e2e',    
    borderRadius: 30,
    

  },
  
  btnText: {
    color: '#f6cd61',
    fontSize: 20,
    textAlign: 'center',
    borderRadius:30,
    borderColor:'black',
  },
  btn1text: {
    color: '#f6cd61',
    fontSize: 30,
    textAlign: 'center',
    },

});

export default Header;

