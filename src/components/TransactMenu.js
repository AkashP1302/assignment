import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CopilotStep, walkthroughable, useCopilot} from 'react-native-copilot';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure react-native-vector-icons is installed
import FutureTabs from './FutureTabs';

const WalkthroughText = walkthroughable(Text);
const CopilotView = walkthroughable(View);

export default function TransactMenu() {
  const {start, stop} = useCopilot();

  // Array of menu item
  const menuItems = [
    {id: 1, title: 'Fund Transfer', icon: 'bank-transfer', copilotStep: 'NO'},
    {
      id: 2,
      title: 'Bill Pay',
      icon: 'file-document-outline',
      copilotStep: 'YES',
    },
    {
      id: 3,
      title: 'Pre-approved Loan Offer',
      icon: 'file-check-outline',
      copilotStep: 'YES',
    },
    {id: 4, title: 'My Account', icon: 'account', copilotStep: 'NO'},
    {
      id: 5,
      title: 'Cards & Forex',
      icon: 'credit-card-outline',
      copilotStep: 'NO',
    },
    {id: 6, title: 'Loans', icon: 'cash-multiple', copilotStep: 'NO'},
    {id: 7, title: 'Invest & Insure', icon: 'finance', copilotStep: 'NO'},
    {id: 8, title: 'BHIM UPI', icon: 'qrcode-scan', copilotStep: 'YES'},
    {id: 9, title: 'FASTag', icon: 'car', copilotStep: 'NO'},
  ];

  const renderCard = ({item}) => (
    <TouchableOpacity style={styles.card}>
      {item.copilotStep === 'YES' && (
        <CopilotStep
          text={`Learn about ${item.title}`}
          order={menuItems.findIndex(m => m.id === item.id) + 1}
          name={item.title.toLowerCase()}>
          <CopilotView style={{flex: 0}}>
            <Icon
              name={item.icon}
              size={42}
              color="#db2228"
              style={styles.icon}
            />
            <WalkthroughText style={styles.cardText}>
              {item.title}
            </WalkthroughText>
          </CopilotView>
        </CopilotStep>
      )}
      {item.copilotStep !== 'YES' && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name={item.icon}
            size={42}
            color="#db2228"
            style={styles.icon}
          />
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <FutureTabs />
      <FlatList
        data={menuItems}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: 600,
  },
});
