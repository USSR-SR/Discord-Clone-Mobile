
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Messages =({item, deleteItem}) =>{
  
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.sender}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WovTJQ52bp9ag0X4ks_phLAwEQzLUA_uiQ&usqp=CAU'}} style={styles.senderDp}></Image>
            <Text style={styles.senderName}>Rohan</Text>
            </View>
        <View style={styles.listItemView}>
            
      <Text style={styles.listItemText}>{item.text}</Text>
        {/* <Icon name ="remove" size={20} color="firebrick" //Need a delete button
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
        minWidth:100,
        marginVertical: 15,
        padding:5,
        borderRadius:20,
        borderTopLeftRadius:0,
        margin:5,
        backgroundColor:'#082030',
        
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
          width:35,
          height:35,
          margin:0,
          backgroundColor:'black',
          borderRadius:20
          
      },
      senderName:{
        fontSize: 18,
        color:'#ca3433',
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
export default Messages;
