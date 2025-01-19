import React, { useState, useEffect } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,ImageBackground,
SafeAreaView,ScrollView,ActivityIndicator} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import Tts from 'react-native-tts';
import { FIREBASE_DB } from '../firebase-config.js';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export default function App({ navigation }) {
  const imageBg = require('../assets/images/background.jpg');
  const [note, setNotes] = useState('');
  const [latestTitle, setLatestTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const firestore = FIREBASE_DB;

  // Fetch the most recently added document from Firestore
  const fetchLatestDocument = async () => {
    setIsLoading(true);
    try {
      const notesCollectionRef = collection(firestore, 'notes');
      const q = query(notesCollectionRef, orderBy('timestamp', 'desc'), limit(1)); // Sort by 'timestamp' descending, limit to 1
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const latestDoc = querySnapshot.docs[0];
        const data = latestDoc.data();
        setNotes(data.note || 'No note found'); // Update note state
        setLatestTitle(data.title || 'Untitled'); // Update title state
      } else {
        setNotes('No notes found in the database.');
        setLatestTitle('Untitled');
      }
    } catch (error) {
      console.error('Error fetching the latest document:', error.message);
      setNotes('Error fetching data.');
      setLatestTitle('Error');
    } finally {
      setIsLoading(false);
    }
  };

  // Text-to-Speech
  const speakSentence = () => {
    if (note) {
      Tts.speak(note);
    } else {
      alert('No sentence available to read aloud.');
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchLatestDocument();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
        {/* Header */}
        <View style={[styles.header]}>
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <Image source={require('../assets/images/menu.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Blurt Away!</Text>
          <Text style={styles.text}>You got this!</Text>
        </View>
        {/* Main Content */}
        <View style={[styles.mainContent]}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          {/* Text to Speech Button and File Button */}
          <View style={styles.card}>
            <TouchableOpacity onPress={speakSentence}>
              <Image style={styles.speechImg} source={require('../assets/images/speech.png')} />
            </TouchableOpacity>
            {/* Display the most recent document title */}
            <Text style={styles.text1}>{latestTitle}</Text>
            <TouchableOpacity style={styles.fileButton}>
              <Image style={styles.fileImg} source={require('../assets/images/File.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textAreaContainer}>
              <View style={styles.timerContainer}>
                {/* Start Button */}
                <TouchableOpacity>
                  <Text style={styles.label}>Start</Text>
                </TouchableOpacity>
              </View>
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
        </View>
        {/* Footer */}
        <View style={[styles.footer]}>
          <View style={styles.footerNav}>
            <View>
              <TouchableOpacity style={styles.badgeButton}>
                <Image source={require('../assets/images/badge.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../assets/images/home.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.userButton}>
                <Image source={require('../assets/images/user.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
  button: {
    padding: 8,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 20,
    backgroundColor: '#fcd9c0',
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 20,
    color: '#3b3b41',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fileButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#666c85',
    alignItems: 'center',
  },
  speechImg: {
    marginLeft: 20,
    height: 40,
    width: 40,
  },
  fileImg: {
    height: 40,
    width: 40,
  },
  card: {
    marginTop: 10,
    margin: 30,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f4f7',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
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
  textAreaContainer: {
    position: 'relative',
    width: 300,
    height: 350,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
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
  inputContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b3b41',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    backgroundColor: '#fcd9c0',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 18,
    marginRight: 50,
    fontWeight: 'bold',
    color: '#3b3b41',
  },
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
});
