import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, Pressable, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../firebase-config.js';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
export default function CreatePage({ navigation }:RouterProps) {
  const imageBg = require('../assets/images/background.jpg');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.menuContainer}>  
            <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()} >
            <Image
                  source={require('../assets/images/logout.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Hello, User!</Text>
              <Text style={styles.text}>Have fun learning!</Text>
            </View>
          </View>
          {/* Main Content */}
          <View style={styles.mainContent}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Input')}>
              <View style={styles.enterText}>
                <Image
                  style={styles.contentImg}
                  source={require('../assets/images/text.png')}
                />
                <Text style={styles.contentText}>
                  Enter Text
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.importContainer}>
            <View style={styles.enterText}>
                <Image
                  style={styles.contentImg}
                  source={require('../assets/images/import.png')}
                />
                <Text style={styles.contentText}>
                  Import File
                </Text>
              </View>
            </View>
          </View>
          {/* Footer */}
          <View style={styles.footer}>
          <View style={styles.footerNav}>
            <View >
              <TouchableOpacity style={styles.badgeButton}>
                <Image
                  source={require('../assets/images/badge.png')}
                />
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/home.png')}
                />
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity style={styles.userButton}>
                <Image
                  source={require('../assets/images/user.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center', 
    marginRight: 60,
  },
  mainContent: {
    flex: 5,
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  footerNav: {
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#FB8130',
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FB8130',
    marginLeft: 10,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  badgeButton: {
    padding: 10,
    marginLeft: 20,
  },
  userButton: {
    padding: 10,
    marginRight: 20,
  },
  backButton: {
    backgroundColor: '#Fcd9c0',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width:90,
    marginTop: 20,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3b3b41',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  importContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterText: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentImg: {
    height: 64,
    width: 64,
    margin: 12,
    marginBottom: 0
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  },

});
