import { Right } from 'native-base';
import React, {useState} from 'react';
import {ScrollView,View, Text, StyleSheet, TouchableOpacity,FlatList,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { v4 as uuidv4 } from 'uuid';

const Menu=()=>{
  const[channels,setChannels] = useState([]);

  const Header=(props)=>{
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
        </View>
    );
  };

  Header.defaultProps = {
      title: 'USSR-SR'
  }

//
  const addChannel = text =>{
    setChannels(prevChannels => {
      return [...prevChannels,{id: uuidv4(), text}];
    })
  };

  //
  const AddChannel =({addChannel})=>{
    const [text,setText]=useState('');
    const onChange = textValue => setText(textValue);
  return (
    <View style={styles.top}>
      <TextInput placeholder='Add Channel' style={styles.input} 
      onChangeText={onChange} value={text} >

         </TextInput>
         <TouchableOpacity style={styles.addbtn} onPress ={()=> {addChannel(text); setText('');}}>
         <Text style={styles.text}> #</Text>
         </TouchableOpacity>
         
      </View>
  );
};

//
const Messages =({channel}) =>{
  
  return (
      <TouchableOpacity style={styles.channel}>
          <View style={styles.sender}></View>
          <Text style={styles.text}> # - Dummy</Text>
          
              
      </TouchableOpacity>
  );
}

 const Leftbar=(props)=>{
   return(
  <ScrollView style={styles.left}>
  <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
  <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
  <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
  <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
  <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
  
    </ScrollView>
   );
 }
Leftbar.defaultProps={
  url:'https://reactjs.org/logo-og.png',
}
//
  return (
    <View style={styles.body}>
    <View style={styles.container}>
   
      <Leftbar/>
      
      <ScrollView style={styles.middle}>
      <Header/>
      <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Invite Komrade</Text>
      </TouchableOpacity>


{/* Here goes the add channel option  */}
<AddChannel addChannel = {addChannel}/>


    <TouchableOpacity>
        {/* A single block */}


        {/*This thingy renders the List of Channels */}
        <FlatList style={styles.block}
      data={channels}
       renderItem={({channel}) => <Messages channel={channel}/>} 
      />
           
        </TouchableOpacity>
      
        </ScrollView>
        </View>
        
        {/* // */}
        <View style={styles.bottom}>
        <TouchableOpacity>
        <Image source={{uri: 'https://i.pinimg.com/originals/49/1f/5b/491f5bc891593f7da0f9c1e5e0e59ab6.png'}} style={styles.btmIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1i-9yH-6RYa4FEZOSTILq9sZmNl2eMVFmw&usqp=CAU'}} style={styles.btmIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://www.iconsdb.com/icons/download/white/search-13-256.png'}} style={styles.btmIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/600px-Ski_trail_rating_symbol-green_circle.svg.png'}} style={styles.btmIcon}></Image>    
        </TouchableOpacity>    
        </View>
        
        </View>
        );
 };

 // 
const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#051e29',
    width:350,
    flexDirection: 'row',
    },
  bottom:{
    flex:.07,
    flexDirection:'row',
    backgroundColor:'#1e1f26',
  },
  serverDp: {
    width:50,
    height:50,
    borderRadius:30,
    margin:5,
  },
  btn:{
    height:35,
    marginLeft:30,
    width:200,
    margin:10,
    borderWidth:.5,
    borderColor: 'black',
    backgroundColor:'#650910',
    borderRadius:10,
  },
  addbtn :{
    height:35,
    marginLeft:30,
    width:40,
    margin:10,
    borderWidth:.5,
    borderColor: 'black',
    backgroundColor:'#55000e',
    borderRadius:10,
  },
  btntext: {
    color: '#f6cd61',
    fontSize: 16,
    textAlign: 'center',
    marginTop:4,
    borderRadius:30,
  },

  middle: {
    margin:5,
    width:275,
    backgroundColor:'#343d46',

  },
  block:{
    margin:2,
    marginRight:6,
    marginLeft:6,
    minHeight:50,
    width:270,
    borderRadius:5,
    backgroundColor:'#051e29',
    
  },
  input:{
    width:200,
    color:'wheat'
  },
    top:{
    flex:.1,
    flexDirection:'row',
    
  },
  left:{
    paddingTop:50,
    width:50,
    marginLeft:0,
  },

  text:{
    color:'wheat',
    padding:10,
    fontSize:15
  },
  channel:{
    color:'wheat',
    padding:10,
  },
  btmIcon:{
    width:30,
    height:30,
    borderRadius:10,
    margin:10,
    marginRight:35,
    marginLeft:35,
     }
});
export default Menu;

