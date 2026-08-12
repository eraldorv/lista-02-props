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
 <Image
        style={styles.image}
        source={require('@/assets/images/raichu.png')}
        contentFit="fill"
        transition={1000}
      />
      <StatusBar style='auto'/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffac13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
 image: {
    width: 200,
    height: 200,
  },
});
