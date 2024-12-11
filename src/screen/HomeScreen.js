import {View, Text} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Ads from '../components/Ads';
import FutureTabs from '../components/FutureTabs';
import TransactMenu from '../components/TransactMenu';
import {DrawerMenu} from '../components/DrawerMenu';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'white', padding: 10}}>
      <Card />
      <Ads />
      <TransactMenu />
    </View>
  );
}
