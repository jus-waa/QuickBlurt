import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../firebase-config';
import Tts from 'react-native-tts';

interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: { params: { id: string } }; // Define route params with 'id'
}

export default function App({ navigation, route }: RouterProps) {
  const imageBg = require('../assets/images/background.jpg');
  const [noteTitle, setNoteTitle] = useState('Loading...'); // Default title
  const [noteContent, setNoteContent] = useState('hi');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = route.params; // Extract 'id' from the route parameters

  useEffect(() => {
    
    if (Tts) {
      try {
        Tts.getInitStatus()
        Tts.setDefaultLanguage('en-US'); // Set the default language
        Tts.setDefaultRate(0.5);        // Adjust speaking rate
        console.log('TTS initialized successfully');
      } catch (error) {
        console.error('Error initializing TTS:', error);
      }
    } else {
      console.error('Tts module is not available');
    }
  }, []);

// Fetch the note's title and content
const fetchNoteDetails = async () => {
  setIsLoading(true);
  try {
    const noteRef = doc(FIREBASE_DB, 'notes', id); // Reference the document by 'id'
    const noteSnap = await getDoc(noteRef);

    if (noteSnap.exists()) {
      setNoteTitle(noteSnap.data().title || 'Untitled'); // Set the title or fallback
      setNoteContent(noteSnap.data().note || 'No content available.'); // Set the note content
    } else {
      setNoteTitle('Note not found'); // Fallback if the note doesn't exist
      setNoteContent('');
    }
  } catch (error) {
    console.error('Error fetching note details:', error.message);
    setNoteTitle('Error loading note');
    setNoteContent('');
  } finally {
    setIsLoading(false);
  }
};



// Trigger Text-to-Speech for the note content
const handleTextToSpeech = () => {
    if (noteContent) {
      Tts.speak(noteContent); // Use TTS to speak the note content
    } else {
      Alert.alert('Error', 'No content available to read aloud.');
    }
  };

  // Fetch the note title when the component mounts
  useEffect(() => {
    fetchNoteDetails();
  }, [id]);

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

          {/* Text-to-Speech Button and Title */}
          <View style={styles.card}>
            <TouchableOpacity onPress={() =>handleTextToSpeech}>
              <Image style={styles.speechImg} source={require('../assets/images/speech.png')} />
            </TouchableOpacity>
            {/* Display the fetched note title */}
            <Text style={styles.text1}>{noteTitle}</Text>
            <TouchableOpacity style={styles.fileButton}>
              <Image style={styles.fileImg} source={require('../assets/images/File.png')} />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.inputContainer}>
            <View style={styles.textAreaContainer}>
              <ScrollView>
                <View style={styles.linesContainer}>
                  {[...Array(1000)].map((_, index) => (
                    <View key={index} style={styles.line} />
                  ))}
                </View>
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
    width: 90,
    marginTop: 10,
    marginBottom: 25,
  },
  backButtonText: {
    fontSize: 16,
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
});
