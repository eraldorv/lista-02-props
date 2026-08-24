import React from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';

export default function CardContato({ nome, telefone, email, foto }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: foto }} 
        style={styles.foto} 
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.detalhe}>{telefone}</Text>
        <Text style={styles.detalhe}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  detalhe: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});