import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GuideOverlay = ({onDismiss}) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.tooltip}>
        <Text style={styles.text}>Use voice commands to search the app</Text>
        {/* Arrow component can be custom-built */}
      </View>
      <View style={styles.tooltip}>
        <Text style={styles.text}>
          Check all your Pre-approved Loans/Offers
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onDismiss}>
          <Text style={styles.buttonText}>OK, Got it. Thanks!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'space-between',
  },
  tooltip: {
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GuideOverlay;
