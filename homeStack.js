import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation' ;
import Menu from './components/Menu';

const screens= {
    Home: {
        screen: Menu
    }
       
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
