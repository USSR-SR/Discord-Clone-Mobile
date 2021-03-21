import { Right } from 'native-base';
import React from 'react';
import {ScrollView,View, Text, StyleSheet, TouchableOpacity,FlatList,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Members=()=>{

  //
  const Header=(props)=>{
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
        </View>,
        <View style={styles.top}>
        <TouchableOpacity>
        <Image source={{uri: 'https://i.pinimg.com/originals/49/1f/5b/491f5bc891593f7da0f9c1e5e0e59ab6.png'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://i.pinimg.com/originals/49/1f/5b/491f5bc891593f7da0f9c1e5e0e59ab6.png'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://i.pinimg.com/originals/49/1f/5b/491f5bc891593f7da0f9c1e5e0e59ab6.png'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://i.pinimg.com/originals/49/1f/5b/491f5bc891593f7da0f9c1e5e0e59ab6.png'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
           
        </View>
    );
  };

  //
  const Member=(props)=>{
    return (
      <View style={styles.member}>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
      <Text style={styles.memberName}>{props.title}</Text>
      </View>
    );
  };

  //
  const Roles =(props) =>{
  
    return (
  
        <TouchableOpacity style={styles.channel}>
            
        <Text style={styles.role}>{props.title}</Text>
        <View style={styles.block}>
          <TouchableOpacity>

            <Member/>
            <Member/>
            <Member/>
            <Member/>
           
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
    );
  };

//
  Header.defaultProps = {
      title: '# - HENTAI'
  }
  Member.defaultProps = {
      title: '# - DEMO'
  }
  Roles.defaultProps = {
    title: 'Komrade -- 69'
}


  return (
    <View style={styles.body}>
    <View style={styles.container}>
 
      <ScrollView style={styles.middle}>

      <Header/>
      
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Invite Komrade</Text>
        </TouchableOpacity>

      <TouchableOpacity>
        {/*This thingy renders the List of Channels */}
       <Roles/>
       <Roles/>
       <Roles/>
       <Roles/>
       <Roles/>
       
      </TouchableOpacity>
      
      </ScrollView>
     
    </View>
    </View>
               
        
        );
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
    marginLeft:50,
    flexDirection: 'row',
    },
//
  top:{
      flex:.07,
    flexDirection:'row',
    backgroundColor:'#343d46',
  },
  topIcon:{
    width:30,
    height:30,
    borderRadius:10,
    margin:10,
    marginRight:25,
    marginLeft:25,
  },

//
  middle: {
    paddingTop:20,
    marginLeft:10,
    width:350,
    backgroundColor:'#343d46',

  },
  block:{
    margin:2,
    marginRight:6,
    marginLeft:6,
    minHeight:50,
    width:320,
    borderRadius:5,
    backgroundColor:'#343d46',
  },

//
  text:{
    color:'wheat',
    padding:10,
  },
  Icon:{
    width:30,
    height:30,
    borderRadius:10,
    margin:10,
    marginRight:35,
    marginLeft:35,
     },
  role:{
    color:'lightgrey',
    fontSize:12,
    paddingLeft: 10,
    padding:5,

     },
//
  member:{
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    width:250,
    height:40,
    margin:10,
  },
  memberDp:{
    width:40,
    height:40,
    borderRadius:30,
  },
  memberName:{
    fontSize: 18,
    color:'wheat',
    marginLeft:20,
    marginTop:5,   
  },

//
  btn:{
    height:35,
    marginLeft:30,
    width:270,
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
  },

     
     
});
export default Members;

