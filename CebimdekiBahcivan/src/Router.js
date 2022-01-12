import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Home from './pages/Home';
import Search from './pages/Search';
import Camera from './pages/Camera';
import Blog from './pages/Blog';
import Suggest from './pages/Suggest';
import Profile from './pages/Profile';

import colors from './styles/colors';

const HomeTab = 'Home';
const SearchTab = 'Search';
const CameraTab = 'Camera';
const BlogTab = 'Blog';
const SuggestTab = 'Suggest';
const ProfileTab = 'Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


  const AuthStack = () => {
        return(
          <Stack.Navigator screenOptions={{headerShown: false}}>
              
              <Stack.Screen name="LoginPage" component={Login} />
              <Stack.Screen name="SignPage" component={Sign} /> 
          </Stack.Navigator>
      );
  };

  const DrawerTab = () => {
      return(
        <Tab.Navigator  
        initialRouteName = {HomeTab}
        screenOptions= {({route}) => ({
          tabBarIcon: ({ focused, color, size}) =>  {
            let iconName;
            let rn = route.name;

            if ( rn === HomeTab) {
              iconName = focused ? 'home' : 'home-outline';
            }else if ( rn === SearchTab) {
              iconName = focused ? 'search' : 'search-outline';
            }else if ( rn === CameraTab) {
              iconName = focused ? 'camera' : 'camera-outline';
            }else if ( rn === BlogTab) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }else if ( rn === SuggestTab) {
              iconName = focused ? 'bulb' : 'bulb-outline';
            }else if ( rn === ProfileTab) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: colors.kelly_green,
        })}

        

      >
        <Tab.Screen name={HomeTab} component={Home} />
        <Tab.Screen name={SearchTab} component={Search}/>
        <Tab.Screen name={CameraTab} component={Camera}/>
        <Tab.Screen name={BlogTab} component={Blog}/>
        <Tab.Screen name={SuggestTab} component={Suggest}/>
        <Tab.Screen name={ProfileTab} component={Profile}/>
      </Tab.Navigator>
      )
  }
  


export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      //setUser({});
    }, 500);

    
  }, []);
  
  return (
    <NavigationContainer>
      { user ? (
      <DrawerTab />
      ):(
      <AuthStack />
      )}
  </NavigationContainer>
  );
};
