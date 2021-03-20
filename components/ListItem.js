
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem =({item, deleteItem}) =>{
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.sender}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.senderDp}></Image>
            <Text style={styles.senderName}>DIO</Text>
            </View>
        <View style={styles.listItemView}>
            
      <Text style={styles.listItemText}>{item.text}</Text>
        {/* <Icon name ="remove" size={20} color="firebrick"
        onPress={()=>deleteItem(item.id)}/> */}
      </View>
            
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
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
      listItemText: {
        fontSize: 18,
        color:'wheat'
      },
      senderDp:{
          width:30,
          height:30,
          margin:0,
          backgroundColor:'black',
          borderRadius:20
          
      },
      senderName:{
        fontSize: 18,
        color:'red',
        marginLeft:20
        
    },
      sender:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        width:400,
        height:30
      }
      
});
export default ListItem;