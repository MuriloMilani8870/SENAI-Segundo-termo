import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import MainScreen from './pages/main';
import SignInScreen from './pages/signin';
import ProfileScreen from './pages/profile';
import FilterScreen from './pages/FiltrarCategoria';
import LogoutScreen from './pages/Logout';




// criar a navegacao com o login - autenticacao
const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen},
});


const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    // Profile: {
    //   screen: ProfileScreen,
    // },
      Filtros: {
        screen: FilterScreen
      },
    Logout:{
      screen: LogoutScreen
    },
  },
  {
    // define a rota inicial
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#26DBD6',
      activeBackgroundColor: '#1A9C97',
      style: {
        width: '100%',
        height: 50,
      },
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator,
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);
