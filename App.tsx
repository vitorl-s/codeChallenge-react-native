import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen/home';
import ContactUs from './src/screens/ContactUsScreen/contactUs';
import Screen1 from './src/screens/Screen1/screen1';
import Screen2 from './src/screens/Screen2/screen2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Entypo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: DrawerContentComponentProps) {
 
  return (
    <View style={[{flex: 1, backgroundColor: '#0C1238'}]}>
      <DrawerContentScrollView style={{flex: 1}} contentContainerStyle={{marginLeft: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 26, color: 'white', alignSelf: 'center', marginBottom: 50}}>
          Beka
        </Text>
        <DrawerItemList {...props} />
        <View style={{height: 1, width: '80%', backgroundColor: 'gray', marginLeft: 5, marginVertical: 35}}/>
        <DrawerItem
          label="Sign Out"
          labelStyle={{color: 'white'}}
          onPress={() => console.log('logout')}
        />
      </DrawerContentScrollView>
    </View>
  );
}

function CustomDrawer() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="Feed" 
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{marginLeft: 15}}>
            <Ionicons name='menu' size={24} color='lightgray' />
          </TouchableOpacity>
        ),
        headerTitle: 'START',
        headerTitleAlign: 'left',
        headerTitleStyle: {color: 'lightgray'},
        drawerActiveBackgroundColor: '#693941',
        drawerActiveTintColor: '#FF7F7F',
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerItemStyle: {
          borderRadius: 15,
          width: '60%'
        },
        drawerStyle: {
          width: Dimensions.get("screen").width / 1.5,
          backgroundColor: 'transparent',
        },
        drawerInactiveTintColor: 'white'
      }}
    >
      <Drawer.Screen name="Start" component={Tabs} />
      <Drawer.Screen name="Your Cart" component={Screen2} />
      <Drawer.Screen name="Favorites" component={Screen1} />
      <Drawer.Screen name="Your orders" component={Screen2} />
    </Drawer.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Ionicons name='home' size={24} color='lightgray' />}}/>
      <Tab.Screen name="Contact" component={ContactUs} options={{tabBarIcon: () => <Ionicons name='email' size={24} color='lightgray' />}}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer'>
        <Stack.Screen
          name="Drawer"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;