import React, { useState } from 'react';
import {ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Button, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your emails!');
    } catch (error) {
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

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
        <Text style={styles.label}>Email</Text>
         <TextInput value={email} style={styles.input} placeholder="Username" autoCapitalize='none' onChange={(text) => setEmail(text)}> 
         </TextInput>
        <Text style={styles.label}>Password</Text>
          <TextInput value={password} style={styles.input} placeholder="********" autoCapitalize='none' onChange={(text) => setPassword(text)} secureTextEntry> 
          </TextInput>
        { loading ? <ActivityIndicator size="large" color="#0000ff" />
        : <>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={signIn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={signUp}>
            <Text style={styles.loginText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        </>
        }
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
  loginButton: {
    backgroundColor: '#FB8130',
    top: 50,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 50,
  },
  loginText: {
    color: '#6E6E6E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#fff',
    top: 50,
    paddingVertical: 15,
    paddingHorizontal: 38,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FB8130',
    marginTop: 10,
  },
  circleBottomRight: {
    width: 300,
    height: 300,
    backgroundColor: '#FB8130',
    borderRadius: 150,
    position: '',
    bottom: -100,
    right: -180,
    zIndex: 1,
  },
});
