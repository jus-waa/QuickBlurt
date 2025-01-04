import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput, ImageBackground, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
export default function InputText({ navigation }:RouterProps) {
  const imageBg = require('../assets/images/background.jpg');
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
        <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
          {/* Header */}
          <View style={styles.header}>
          <View style={styles.menuContainer}>  
            <TouchableOpacity>
              <Image
                source={require('../assets/images/logout.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Hello, User!</Text>
          <Text style={styles.text}>Have fun learning!</Text>
          </View>
          {/* Main Content */}
          <View style={styles.mainContent}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Subject Name:</Text>
              <TextInput style={styles.input} placeholder="Title" />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Contents:</Text>
              <View style={styles.textAreaContainer}>
                <ScrollView>
                  {/* Render the lines inside the ScrollView */}
                  <View style={styles.linesContainer}>
                    {[...Array(1000)].map((_, index) => (
                      <View key={index} style={styles.line} />
                    ))}
                  </View>
                  {/* TextInput overlaid on the lines */}
                  <TextInput
                    style={styles.textArea}
                    multiline
                    placeholder="Enter your text here"
                  />
                </ScrollView>
              </View>
            </View>
            
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 5,
    padding:10,
    alignItems:'center'
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
    marginLeft: 20,
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

  /*Con*/
  backButton: {
    backgroundColor: '#Fcd9c0',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width:90,
    marginTop: 10,
    marginBottom:25
  },
  backButtonText: {
    fontSize: 16,
    color: '#3b3b41',
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems:'center'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b3b41',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC',
    width:300,
    marginBottom:10
  },
  textAreaContainer: {
    position: 'relative',
    width: 300,
    height: 350,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF'
  },
  textArea: {
    flex: 1, 
    fontSize: 16,
    lineHeight: 24, 
    padding: 10, 
    textAlignVertical: 'top',
    backgroundColor: 'transparent', 
    zIndex: 1, 
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#Fcd9c0',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    width:150,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b3b41',
  },
  /**NOTE gpt */
  linesContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#DDD',
    marginBottom: 23, 
  },
});

