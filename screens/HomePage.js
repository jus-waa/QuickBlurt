import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, Pressable, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function HomePage({ navigation }) {
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
            {/* Get Started */}
            <View style={styles.getStartedContainer}>
              <View style={styles.getStarted}>
                  <TouchableOpacity style={[styles.getStartedButton, styles.gSBI]} onPress={() => navigation.navigate('Create')}>
                    <Image 
                      style={{ zIndex: 1 }}
                      source={require('../assets/images/add.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.getStartedText}>Get Started</Text>
              </View>
            </View>
            {/* Your Blurts */}
            <View style={styles.yourBlurts}>
              <View> 
                <Text style={styles.yourBlurtsText}>Search</Text>
              </View>
              <View style={styles.blurtsContainer}>
                  <View style={styles.deleteButton}>
                    <Image 
                      source={require('../assets/images/delete.png')}
                    />
                  </View>
                  <Text style={styles.blurtsText}>Title</Text>
                  <Text></Text>
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
    flex: 0.7,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerNav: {
    margin: 18,
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
  getStartedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    marginTop: 10,
  },
  getStarted: {
    height: 150,
    width: 150,
    justifyContent: 'center', 
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 20,
  },
  getStartedButton: {
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gSBI: {
    marginLeft: 14,
    marginRight: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
  },
  deleteButton: {
    alignItems: 'flex-end',
  },
  yourBlurtsText: {
    fontSize: 18,
    width: '100%',
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingRight: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'right',
  },
  yourBlurts: {
    height: '100%',
    padding: 20,
  },
  blurtsContainer: {
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  blurtsText: {
    fontSize: 20,
    height: '100%',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
