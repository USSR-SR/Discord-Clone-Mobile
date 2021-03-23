import React, {Component} from 'react'
import Menu from './components/Menu'
import Home from './Home'
import Members from './components/Members'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default class App extends Component{

    
    render(){
        createHomeStack= ()=>{
            <Stack.Navigator>
                <Stack.Screen name="Home" component= "Home"/>
            </Stack.Navigator>
        }
         function menuButton(){
     const navigation = useNavigation();
      return(
          <Button 
          title='Menu'
          onPress={() => {
                navigation.navigate('Menu');
          }
        }/>
      )
 }
    return(
        
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name= 'Home' component={Home}/>
                <Drawer.Screen name= 'Menu' component={Menu} />
                <Drawer.Screen name= 'Members' component={Members} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
    }
}
