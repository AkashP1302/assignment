import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function FutureTabs() {
  const [activeTab, setActiveTab] = useState('Transact'); // Track the active tab

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        padding: 5,
        borderRadius: 25,
      }}>
      <TouchableOpacity
        style={{
          ...styles.upperTab,
          backgroundColor: activeTab === 'Transact' ? '#db2228' : 'transparent',
          borderWidth: 1,
          borderColor: '#db2228',
        }}
        onPress={() => setActiveTab('Transact')}>
        <Text
          style={[
            styles.upperTabText,
            {color: activeTab === 'Transact' ? '#fff' : 'black'},
          ]}>
          Transact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.upperTab,
          backgroundColor:
            activeTab === 'Invest & Insure' ? '#db2228' : 'transparent',
          borderWidth: 1,
          borderColor: '#db2228',
        }}
        onPress={() => setActiveTab('Invest & Insure')}>
        <Text
          style={[
            styles.upperTabText,
            {color: activeTab === 'Invest & Insure' ? '#fff' : 'black'},
          ]}>
          Invest & Insure
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.upperTab,
          backgroundColor:
            activeTab === 'Travel & Shop' ? '#db2228' : 'transparent',
          borderWidth: 1,
          borderColor: '#db2228',
        }}
        onPress={() => setActiveTab('Travel & Shop')}>
        <Text
          style={[
            styles.upperTabText,
            {color: activeTab === 'Travel & Shop' ? '#fff' : 'black'},
          ]}>
          Travel & Shop
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  upperTab: {
    paddingVertical: 5,
    borderRadius: 25,
    width: 120,
    backgroundColor: '#fff',
    // paddingVertical: 5,
  },
  upperTabText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 500,
  },
});
