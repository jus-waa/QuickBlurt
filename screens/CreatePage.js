import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, Pressable, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function CreatePage({ navigation }) {
  const imageBg = require('../assets/images/background.jpg');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
          {/* Header */}
          <View style={[styles.header, styles.content]}>
          <View style={styles.menuContainer}>  
            <TouchableOpacity>
              <Image
                source={require('../assets/images/menu.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Hello, User!</Text>
          <Text style={styles.text}>Have fun learning!</Text>
          </View>
          {/* Main Content */}
          <View style={[styles.mainContent, styles.content]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}> 
                  Back
                </Text>
              </TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.enterText}>
                <Image
                  style={styles.contentImg}
                  source={require('../assets/images/text.png')}
                />
                <Text style={styles.contentText}>
                  Enter Text
                </Text>
              </View>
            </View>
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
          <View style={[styles.footer, styles.content]}>
          <View style={styles.footerNav}>
            <View >
              <TouchableOpacity style={styles.badgeButton}>
                <Image
                  source={require('../assets/images/badge.png')}
                />
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity style={styles.homeButton}>
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
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    position: 'absolute',
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
  back: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    width: 80,
    textAlign: 'center',
    backgroundColor: '#fff',  
    borderRadius: 50,  
    
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
