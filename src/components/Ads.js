import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure react-native-vector-icons is installed

export default function Ads() {
  return (
    <View style={styles.card}>
      {/* Red Box with Centered Icon */}
      <View style={styles.redBox}>
        <Icon name="lightbulb-outline" size={24} color="#fff" />
      </View>

      {/* Text Content */}
      <Text style={styles.text}>
        Thinking of gold? Invest in Sovereign Gold Bonds. Apply Now. T&C
      </Text>

      {/* Right Arrow Icon */}
      {/* <Icon name="arrow-forward" size={24} color="#000" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center', // Centers text and icons vertically
    backgroundColor: '#E5E4E2',
    padding: 15,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  redBox: {
    width: 50,
    height: 65,
    backgroundColor: '#db2228',
    borderRadius: 5,
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center', // Center icon horizontally
    marginRight: 15,
    marginLeft: -20,
    marginTop: -20,
    marginBottom: -20,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    flex: 1, // Ensures the text takes up available space
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
  },
});
