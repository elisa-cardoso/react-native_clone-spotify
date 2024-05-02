import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { StyleSheet } from 'react-native';
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PremiumScreen from "../screens/PremiumScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SignInScreen from '../screens/SignInScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 65,
            paddingTop: 10,
            backgroundColor: "rgb(0,0,0)",
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            marginBottom: 5,
            paddingBottom: 5,
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={color} size={30} />
            ),
            headerStyle: { backgroundColor: '#AE6FC9', color: "white" }, headerTintColor: '#fff', headerTitle: ''
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="my-library-music" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Premium"
          component={PremiumScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="spotify" color={color} size={30} />
            ),
            
          }}
        />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#111', color: "white" }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;