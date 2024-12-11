import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({title, description, icon}) => {
  return (
    <View style={styles.cardContener}>
      <View style={styles.card}>
        <Text style={styles.title}>{'My Saving Account'}</Text>
        <Text style={styles.cardDetails}>{'XXXXXXXXXXXXXX'}</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 20,
              // padding: 5,
              width: 150,
              borderColor: '#fff',
            }}>
            <Text style={styles.textStyle}>View Balance</Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}>UPI ID:sXXXXXXX@icici</Text>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#fff',
              // padding: 1,
              width: '106%',
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly', // Use space-evenly for consistent spacing
              alignItems: 'center',
              width: '100%',
              paddingVertical: 10,
              marginBottom: -20,
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: '#fff',
                paddingRight: 20,
              }}>
              <Text style={[styles.textStyle]}>Statement</Text>
            </View>

            <View
              style={{
                borderRightWidth: 1,
                borderColor: '#fff',
                paddingRight: 20,
              }}>
              <Text style={[styles.textStyle]}>Debit Card</Text>
            </View>

            <View>
              <Text style={[styles.textStyle]}>Service</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContener: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#db2228',
    padding: 15,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  cardDetails: {
    fontSize: 20,
    fontWeight: 800,
    color: 'black',
    textAlign: 'center',
    color: '#fff',
  },
  textStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 7,
  },
});

export default Card;
