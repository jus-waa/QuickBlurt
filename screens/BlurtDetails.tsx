import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FIREBASE_DB } from '../firebase-config';
import { doc, getDoc } from "firebase/firestore";

interface BlurtDetailsProps {
  route: RouteProp<{ params: { id: string } }, 'params'>;
}

export default function BlurtDetails({ route }: BlurtDetailsProps) {
  const { id } = route.params;
  const [blurt, setBlurt] = useState<any>(null);

  useEffect(() => {
    const fetchBlurt = async () => {
      const docRef = doc(FIREBASE_DB, 'notes', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlurt(docSnap.data());
      }
    };
    fetchBlurt();
  }, [id]);
  {/* Loading screen */}
  if (!blurt) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  {/* Main Content*/}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blurt.title}</Text>
      <Text style={styles.content}>{blurt.note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, textAlign: 'center' },
});
