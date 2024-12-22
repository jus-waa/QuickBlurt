import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function RegisterPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Left Circle with Logo */}
      <View style={styles.circleTopLeft}>
        <Text style={styles.logoText}>Quick Blurt</Text>
      </View>

      {/* Top Right Circle */}
      <View style={styles.circleTopRight}></View>
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
         <Text Input style={styles.input} placeholder="quickblurt" />
        <Text style={styles.label}>Password</Text>
          <Text Input style={styles.input} placeholder="********" secureTextEntry />
        <Text style={styles.label}>Confirm Password</Text>
          <Text Input style={styles.input} placeholder="********" secureTextEntry />
        <Text style={styles.label}>Email</Text>
          <Text Input style={styles.input} placeholder="quickblurt@student.com" keyboardType="email-address" />
      </View>
      {/*Register Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Right Circle */}
      <View style={styles.circleBottomRight}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  circleTopLeft: {
    width: 350,
    height: 350,
    backgroundColor: '#FB8130',
    borderRadius: 200,
    position: 'absolute',
    top: -150,
    left: -150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize:30,
    fontFamily:'bobbins',
    top:70,
    left: 60,
    fontWeight: 'bold',
  },
  circleTopRight: {
    width: 200,
    height: 200,
    backgroundColor: '#FCD9C0',
    borderRadius: 100,
    position: 'absolute',
    top: -50,
    right: -50,
  },
  inputContainer: {
    marginTop: 250,
    left: 60,
    marginBottom: 30,
    width: 300,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6E6E6E',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: -30,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#FCD9C0',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
  },
  registerText: {
    color: '#6E6E6E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleBottomRight: {
    width: 300,
    height: 300,
    backgroundColor: '#FB8130',
    borderRadius: 150,
    position: 'absolute',
    bottom: -100,
    right: -100,
  },
});
