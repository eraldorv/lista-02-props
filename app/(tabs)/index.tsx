import { useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

import Alerta from '@/components/alert';
import CardContato from '@/components/contatoCard';
import Tarefa from '@/components/Tarefa';

const CONTATOS = [
  {
    id: '1',
    nome: 'João Silva',
    telefone: '(11) 99999-9999',
    email: 'joao@email.com',
    foto: 'https://i.pravatar.cc/80?img=1',
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    telefone: '(21) 98888-8888',
    email: 'maria@email.com',
    foto: 'https://i.pravatar.cc/80?img=5',
  },
  {
    id: '3',
    nome: 'Carlos Souza',
    telefone: '(31) 97777-7777',
    email: 'carlos@email.com',
    foto: 'https://i.pravatar.cc/80?img=8',
  },
];

export default function HomeScreen() {
  const [pagina, setPagina] = useState<1 | 2 | 3>(1);

  const [listaTarefas, setListaTarefas] = useState([
    { id: '1', texto: 'Estudar React Native', concluida: true },
    { id: '2', texto: 'Fazer lista de exercícios', concluida: false },
    { id: '3', texto: 'Enviar trabalho', concluida: true },
  ]);

  const toggleTarefa = (id: string) => {
    setListaTarefas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {pagina === 1 && (
        <View style={styles.conteudo}>
          <Alerta type="sucesso" />
          <TouchableOpacity style={styles.btn} onPress={() => setPagina(2)}>
            <Text style={styles.txtbtn}>Ir para Contatos ➔</Text>
          </TouchableOpacity>
        </View>
      )}

      {pagina === 2 && (
        <View style={styles.conteudo}>
          <ScrollView contentContainerStyle={styles.lista}>
            <Text style={styles.titulo}>Minha Lista de Contatos</Text>
            {CONTATOS.map((contato) => (
              <CardContato
                key={contato.id}
                nome={contato.nome}
                telefone={contato.telefone}
                email={contato.email}
                foto={contato.foto}
              />
            ))}
          </ScrollView>

          <View style={styles.acoes}>
            <TouchableOpacity style={styles.btn} onPress={() => setPagina(1)}>
              <Text style={styles.txtbtn}>← Alerta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setPagina(3)}>
              <Text style={styles.txtbtn}>Tarefas ➔</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {pagina === 3 && (
        <View style={styles.conteudo}>
          <ScrollView contentContainerStyle={styles.lista}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>
            {listaTarefas.map((tarefa) => (
              <Tarefa
                key={tarefa.id}
                texto={tarefa.texto}
                concluida={tarefa.concluida}
                onToggle={() => toggleTarefa(tarefa.id)}
              />
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.btn} onPress={() => setPagina(2)}>
            <Text style={styles.txtbtn}>← Voltar para Contatos</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191722',
    flex: 1,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'space-between',
    padding: "5%",
    gap: 10,
  },
  titulo: {
    color: '#fdffff',
    fontSize: 20,
    fontStyle: 'italic',
    paddingBottom: 10,
  },
  lista: {
    gap: 10,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  btn: {
    backgroundColor: '#312c49',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "4%",
    borderRadius: 10,
    flex: 1,
  },
  txtbtn: {
    color: '#fdffff',
    fontSize: 16,
  },
});