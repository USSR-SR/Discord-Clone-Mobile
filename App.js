import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
//
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';



const App=()=>{
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
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#051e29',
  },
  footer:{
    width:50
  },
  messages:{
    marginBottom:75
  }
});

export default App;