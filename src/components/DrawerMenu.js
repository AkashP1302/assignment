import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icons for the drawer and header
import HomeScreen from '../screen/HomeScreen';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          headerStyle: styles.header,
          headerTintColor: '#fff',
          drawerActiveTintColor: '#db2228', // Highlight active item
          drawerLabelStyle: styles.drawerLabel,
          headerLeft: () => (
            <Icon
              name="menu"
              size={30}
              color="#fff"
              style={styles.iconLeft}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <Icon name="bell" size={25} color="#fff" style={styles.iconRight} />
          ),
        })}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#db2228',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconLeft: {
    marginLeft: 10,
  },
  iconRight: {
    marginRight: 10,
  },
  drawerLabel: {
    fontSize: 16,
  },
});
