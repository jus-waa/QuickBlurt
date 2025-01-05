import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_APP, FIREBASE_DB } from '../firebase-config.js';
import { collection, onSnapshot } from "firebase/firestore";
import { FlashList } from '@shopify/flash-list';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
export default function HomePage({ navigation }: RouterProps) {
  const imageBg = require('../assets/images/background.jpg'); 

  const [notes, setNotes] = useState([]);
  const navigate = useNavigation(); 
  const firebase = FIREBASE_APP;
  const firestore = FIREBASE_DB;

  //fetch the data from firestore
  useEffect(() => {
    // Create a reference to the 'notes' collection
    const notesCollectionRef = collection(firestore, 'notes');
  
    // Set up a real-time subscription to the collection
    const unsubscribe = onSnapshot(notesCollectionRef, (querySnapshot) => {
      const newNotes = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newNotes.push({ note: data.note, title: data.title, id: doc.id });
      });
      console.log('Fetched Notes:', newNotes); // Add this line
      setNotes(newNotes); // Update the state with fetched notes
    });
  
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

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
            {/* Get Started */}
            <View style={styles.getStartedContainer}>
              <View style={styles.getStarted}>
                  <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Create')}>
                    <Image 
                      source={require('../assets/images/add.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.getStartedText}>Get Started</Text>
              </View>
            </View>
            {/* Your Blurts */}
            <View style={styles.yourBlurts}>
              {/* Blurts Flashlist */}
                <FlashList
                  data={notes}
                  numColumns={2}
                  estimatedItemSize={100}
                  renderItem={({ item }) => (
                    <View style={styles.blurtNotes} key={item.id}>
                      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>
                        {item.title}
                      </Text>
                      <Text>{item.note}</Text>
                    </View>
                  )}
                  />
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
    padding: 10,
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
  deleteButton: {
    alignItems: 'flex-end',
  },
  yourBlurtsText: {
    fontSize: 18,
    width: '90%',
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'right',
  },
  yourBlurts: {
    flex: 1,
    padding: 20,
  },
  blurtsContainer: {
    flex: 1, // Ensures it takes available space in the parent
    width: '100%', // Makes it span the full width of the parent
    padding: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  
  blurtNotes: {
    flex: 1,
    margin: 10,              // Space between items
    padding: 15,             // Internal padding
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 5,            // Shadow for Android
    shadowColor: '#000',     // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',    // Center text horizontally
    justifyContent: 'center' // Center text vertically
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
