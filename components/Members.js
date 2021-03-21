import { Right } from 'native-base';
import React from 'react';
import {ScrollView,View, Text, StyleSheet, TouchableOpacity,FlatList,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Members=()=>{
  const Header=(props)=>{
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
        </View>
    );
  };
  Header.defaultProps = {
      title: '# - HENTAI'
  }
  return (
    <View style={styles.body}>
    <View style={styles.container}>
 
      <ScrollView style={styles.middle}>
      <Header/>
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
      
      <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Invite Komrade</Text>
      </TouchableOpacity>
      <Text style={styles.role}>Komrade -- 69</Text>
       {/* A single block */}
            <View style={styles.block}>
            <TouchableOpacity>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
                   
        </TouchableOpacity>

      
        </View>
        <Text style={styles.role}>Komrade -- 69</Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
                   
        </TouchableOpacity>

      
        </View>
        <Text style={styles.role}>Komrade -- 69</Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
                   
        </TouchableOpacity>

      
        </View>
        <Text style={styles.role}>Komrade -- 69</Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
                   
        </TouchableOpacity>

      
        </View>
        <Text style={styles.role}>Komrade -- 69</Text>
        <View style={styles.block}>
            <TouchableOpacity>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
            <View style={styles.member}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.memberDp}></Image>
            <Text style={styles.memberName}>DIO Brando Ezz</Text>
            </View>
                   
        </TouchableOpacity>

      
        </View>
        </ScrollView>
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
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#051e29',
    width:350,
    marginLeft:50,
    flexDirection: 'row',
    },

  memberDp:{
    width:40,
    height:40,
    borderRadius:30,
      },
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
    // borderColor:'black',
  },

  middle: {
    // marginTop:50,
    // paddingTop:50,
    marginLeft:10,
    width:350,
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
    width:320,
    borderRadius:5,
    // borderWidth:2,
    // borderColor: 'black',
    backgroundColor:'#343d46',
    
  },
  text:{
    color:'wheat',
    // borderWidth:2,
    // borderColor: 'black',
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
     listItem: {
        // position:'absolute',
        flex:1,
        maxWidth:300,
        padding: 15,
        borderRadius:30,
        borderBottomEndRadius:0,
        margin:5,
        
      },
      listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:50,
      },
      memberName:{

        fontSize: 18,
        color:'wheat',
        marginLeft:20,
        marginTop:5,
        
    },
      member:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        width:250,
        
    height:40,
    margin:10,
      }
});
export default Members;

