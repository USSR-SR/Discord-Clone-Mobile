import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem =({addItem})=>{
    const [text,setText]=useState('');
    const onChange = textValue => setText(textValue);
  return (
    <View style={styles.footer}>
      <TextInput placeholder='Message' style={styles.input} 
      onChangeText={onChange} value={text} >

         </TextInput>
         <TouchableOpacity style={styles.btn} onPress ={()=> {addItem(text); setText('');}}>
          <Text style={styles.btnText}><Icon name="send" size={20}/></Text>
         </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      position:'absolute',
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 60,
    padding: 8,
    width:400,
    bottom:5,
  },
    input: {
      height: 40,
      padding: 8,
      margin: 5,
      width:300,
      backgroundColor: 'darkgrey',
      borderRadius:30,
      padding:10,
    },
    btn: {
      width:50,
      height:40,
      backgroundColor: '#451e3e',
      padding: 9,
      margin: 5,
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

export default AddItem;