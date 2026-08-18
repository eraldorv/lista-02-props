import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TarefaProps {
  texto: string;
  concluida: boolean;
  onToggle?: () => void;
}

export default function Tarefa({ texto, concluida, onToggle }: TarefaProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, concluida && styles.containerConcluido]} 
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, concluida ? styles.checkboxConcluido : styles.checkboxPendente]}>
        {concluidasIcone(concluida)}
      </View>

      <Text style={[styles.texto, concluida && styles.textoConcluido]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

function concluidasIcone(concluida: boolean) {
  if (!concluida) return null;
  return <Text style={styles.checkMark}>✓</Text>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#312c49',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#4a436d',
  },
  containerConcluido: {
    backgroundColor: '#252136',
    borderColor: '#383253',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxPendente: {
    borderWidth: 2,
    borderColor: '#8e8a9f',
    backgroundColor: 'transparent',
  },
  checkboxConcluido: {
    backgroundColor: '#22c55e',
    borderWidth: 0,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#8e8a9f',
  },
});