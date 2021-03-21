import { Right } from 'native-base';
import React from 'react';
import {ScrollView,View, Text, StyleSheet, TouchableOpacity,FlatList,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Header=()=>{
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
  return (
    <View style={styles.body}>
    <View style={styles.container}>
   
      <ScrollView style={styles.left}>
      <Image source={{uri: 'r'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.serverDp}></Image>
      </ScrollView>
      <ScrollView style={styles.middle}>
      <Header/>
      <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Invite Komrade</Text>
      </TouchableOpacity>
    <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>
        <TouchableOpacity>

        {/* A single block */}
            <ScrollView style={styles.block}>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>
            <Text style={styles.text}>#DIO</Text>          

            </ScrollView>            
        </TouchableOpacity>

      
        </ScrollView>
        </View>
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
  //   <View style={styles.container}>
  //     <Text style={styles.Text}>Wtfff</Text>
  //   <FlatList>
  //   <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.senderDp}></Image>
  //   </FlatList>
  //     </View>
  // );
};

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
    backgroundColor:'#851e3e',
    borderRadius:10,
  },
  btntext: {
    color: '#f6cd61',
    fontSize: 16,
    textAlign: 'center',
    marginTop:4,
    borderRadius:30,
    // borderColor:'black',
  },

  middle: {
    // marginTop:50,
    // paddingTop:50,
    margin:5,
    width:275,
    // marginLeft:70,
    // marginTop:-850,
    // borderRadius:10,
    // borderWidth:2,
    // borderColor: 'black',
    backgroundColor:'#343d46',

  },
  block:{
    margin:2,
    marginRight:6,
    marginLeft:6,
    minHeight:50,
    width:270,
    borderRadius:5,
    // borderWidth:2,
    // borderColor: 'black',
    backgroundColor:'#051e29',
    
  },
  
  left:{
    paddingTop:50,
    width:50,
    // borderWidth:2,
    // borderColor: 'black',
    marginLeft:0,
  },

  text:{
    color:'wheat',
    // borderWidth:2,
    // borderColor: 'black',
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
export default Header;

