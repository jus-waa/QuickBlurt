import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
const firebaseConfig = {
  apiKey: "AIzaSyCoMJFwhG0WJeYu_pIOEOICvcG4rXfXT4o",
  authDomain: "quick-blurt.firebaseapp.com",
  projectId: "quick-blurt",
  storageBucket: "quick-blurt.firebasestorage.app",
  messagingSenderId: "834349533962",
  appId: "1:834349533962:web:ae3fa440602e8af1d688f3",
  measurementId: "G-LSGL46VZFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// You can check if Firebase is initialized by checking the `app` object
const checkFirebase = () => {
  if (app) {
    console.log('Firebase is initialized');
  } else {
    console.log('Firebase is not initialized');
  }
};
export default function AuthPage({ navigation }) {
  // Just check if Firebase app is initialized (no Firestore or database needed)
  useEffect(() => {
    checkFirebase();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Left Circle with Logo */}
      <View style={styles.circleTopLeft}>
        <Text style={styles.logoText}>Quick Blurt</Text>
      </View>

      {/* Top Right Circle */}
      <View style={styles.circleTopRight}></View>

      {/* Login and Register Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Right Circle */}
      <View style={styles.circleBottomRight}></View>

      {/* Social Media Section */}
      <View style={styles.socialMediaContainer}>
        <Text style={styles.signUpText}>Sign up using</Text>
        <View style={styles.iconsContainer}>
          {/* Replace these placeholders with icons */}
           <TouchableOpacity style={styles.icon}>
           <Image
              source={require('../assets/images/fb_logo.png')}
              style={styles.iconImage}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require('../assets/images/google_logo.png')} 
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require('../assets/images/linkedin_logo.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: 'orange',
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
    top:70,
    left: 60,
    fontWeight: 'bold',
  },
  circleTopRight: {
    width: 200,
    height: 200,
    backgroundColor: '#FAD6A5',
    borderRadius: 100,
    position: 'absolute',
    top: -50,
    right: -50,
  },
  buttonContainer: {
    marginTop: 350,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 15,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#FAD6A5',
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
    backgroundColor: 'orange',
    borderRadius: 150,
    position: 'absolute',
    bottom: -100,
    right: -100,
  },
  socialMediaContainer: {
    position: 'absolute',
    bottom: 180,
    alignItems: 'center',
    width: '100%',
  },
  signUpText: {
    color: '#6E6E6E',
    fontSize: 16,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
