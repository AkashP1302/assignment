import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';

// Dummy screen components for new tabs
const FavouritesScreen = () => null;
const ScanToPayScreen = () => null;
const OffersScreen = () => null;
const ServiceScreen = () => null;

// Define color constants
const primaryColor = '#db2228';
const white = '#ffffff';
const whiteLight = '#f1f1f1';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: primaryColor,
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 5,
            fontWeight: '700',
          },
          tabBarIconStyle: {
            marginBottom: -5,
          },
          tabBarStyle: [
            {
              display: 'flex',
              height: 60,
              // backgroundColor: primaryColor,
              borderTopColor: primaryColor,
              borderWidth: 1,
            },
            null,
          ],
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            // Define icons for each tab based on route name
            switch (route.name) {
              case 'Me':
                iconName = focused ? 'account' : 'account-outline';
                break;
              case 'Favourites':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              case 'Scan to Pay':
                iconName = focused ? 'qrcode-scan' : 'qrcode';
                break;
              case 'Offers':
                iconName = focused ? 'tag' : 'tag-outline';
                break;
              case 'Service':
                iconName = focused ? 'cog' : 'cog-outline';
                break;
              default:
                iconName = 'help';
            }

            // Render the icon
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Me"
          component={HomeScreen}
          options={{tabBarLabel: 'Me'}}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{tabBarLabel: 'Favourites'}}
        />
        <Tab.Screen
          name="Scan to Pay"
          component={ScanToPayScreen}
          options={{tabBarLabel: 'Scan to Pay'}}
        />
        <Tab.Screen
          name="Offers"
          component={OffersScreen}
          options={{tabBarLabel: 'Offers'}}
        />
        <Tab.Screen
          name="Service"
          component={ServiceScreen}
          options={{tabBarLabel: 'Service'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
