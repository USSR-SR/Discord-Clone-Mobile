import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
//
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/Messages';
import AddItem from './components/SendMessage';
import Navigator from './homeStack';


function Home ({ navigation }) {
  const[items,setItems] = useState([]);


//deletion
const deleteItem = (id)=>{
  setItems(prevItems => {
    return prevItems.filter(item=> item.id != id);
  })
};
const addItem = text =>{
  setItems(prevItems => {
    return [...prevItems,{id: uuidv4(), text}];
  })
};


  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} title= 'lol' onPress={() => navigation.Navigate('Menu')}><Text style={styles.text}>=</Text>
      </TouchableOpacity>
        
      <Header />

      <FlatList style={styles.messages}
      data={items}
       renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      <AddItem addItem = {addItem}/>
      </View>
  );
  
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#851e3e',
    zIndex:-1,
    width:400,
  },
  btn: {
    width:50,
    position:'absolute',
    marginTop:2,
    justifyContent:'center',
    borderRadius:100,
    height:50,
    backgroundColor:'#451e3e',
    zIndex:99,
    
  },

  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#051e29',
    paddingTop:45,
  },
  footer:{
    width:50,
    
  },
  messages:{
    marginBottom:75
  },
  text:{
    color:'wheat',
    textAlign:'center',
  }
});

export default Home;