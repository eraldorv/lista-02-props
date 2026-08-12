import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.titulo}>ola mundo</ThemedText>
    <ThemedText>meu nome e eraldo e esse e meu primeiro app de react native</ThemedText>
    <StatusBar style='auto'/>
  </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56ff13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  }
});
