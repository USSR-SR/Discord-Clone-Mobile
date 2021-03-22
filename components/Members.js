import { Right } from 'native-base';
import React from 'react';
import {ScrollView,View, Text, StyleSheet, TouchableOpacity,FlatList,Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Members=()=>{

  //
  function Homebutton (){
    const navigation = useNavigation();
     return(
         <TouchableOpacity
         style={styles.btn1}
         onPress={() => {
               navigation.goBack();
         }
       }>
         <Text style={styles.btn1text}>{`<<`}</Text>
       </TouchableOpacity>
     )
}
  const Header=(props)=>{
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
        </View>,
        <View style={styles.top}>

        <Homebutton/>
  
        <TouchableOpacity>
        <Image source={{uri: 'https://lh3.googleusercontent.com/05m3CO1Wi8si9ienyCy78gqfVCDo9thVtCSdReNuFxrFedCMsy2NwQfLefqhFkGfNTz3UztUX2QTp1KkmaTykIp0y_M3ritQmSE4JA=w1064-v0'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://lh3.googleusercontent.com/JAhGX9MKWvnuCVAsx2we9bQn8ghLDddf2UzYQQdTV7T9dvxNhtmkzZEpS8k7GUKAoXQ0I0I2-PO7Ks2YckBP_dodHfar2_5BJyA6=w1064-v0'}} style={styles.topIcon}></Image>
        </TouchableOpacity>
           
        </View>
    );
  };

  //
  const Member=(props)=>{
    return (
      <View style={styles.member}>
      <Image source={{uri: 'https://i.pinimg.com/originals/75/6c/1b/756c1b55276fa7083ebbcf04d59f588f.jpg'}} style={styles.memberDp}></Image>
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
      title: 'Kishibe Rohan'
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
    backgroundColor: '#051e29',
    width:400,
    flexDirection: 'row',
    },
//
  top:{
      flex:.07,
    flexDirection:'row',
    backgroundColor:'#343d46',
  },
  topIcon:{
    width:45,
    height:45,
    borderRadius:30,
    marginRight:25,
    
    marginLeft:25,
    marginTop:4.5,
    borderWidth:0,
    borderColor:'#000',
  },

//
  middle: {
    paddingTop:20,
    padding:15,
    width:400,
    backgroundColor:'#343d46',

  },
  block:{
    margin:2,
    marginRight:6,
    marginLeft:6,
    minHeight:50,
    width:380,
    borderRadius:5,
    backgroundColor:'#343d46',
  },

//
  text:{
    color:'wheat',
    padding:10,    
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
    height:35,
    margin:10,
    
  },
  memberDp:{
    width:35,
    height:35,
    borderRadius:30,
    marginLeft:10,
  },
  memberName:{
    fontSize: 15,
    color:'wheat',
    marginLeft:30,
    marginTop:5,   

  },

//
  btn:{
    height:40,
    marginLeft:55,
    width:250,
    margin:10,
    backgroundColor:'#7f002e',
    borderRadius:15,
    borderWidth:1,
    borderColor:'#000',

  },
  btn1: {
    width:45,
    height:45,
    margin:5,
    marginHorizontal:20,
    marginLeft:15,
    backgroundColor: '#451e3e',
    borderRadius: 30,
    borderWidth:5,
    borderColor:'#f6cd61',

  },
  btntext: {
    color: '#f6cd61',
    fontSize: 18,
    margin:5,
    textAlign: 'center',
    borderRadius:30,
  },
  btn1text: {
    color: '#f6cd61',
    fontSize: 24,
    paddingTop:-2,
    textAlign: 'center',
  },

     
     
});
export default Members;

