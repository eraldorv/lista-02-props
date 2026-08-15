import { StyleSheet, View, Text, Image} from "react-native";

export default function ContatoCard({ contato }: { contato: ContatoCardsProps; }) {
    return (
   <View style={styles.carddecontato}>
    <Text style={styles.titulo}> ESSE E MEU CARTAO DE CONTATO</Text>
        <Text style={styles.textocontato}>nome: {contato.nome}</Text>
        <Text style={styles.textocontato}>idade: {contato.idade}</Text>
        <Text style={styles.textocontato}>email: {contato.email}</Text>
   </View>
    )
}

interface ContatoCardsProps {
    nome: string;
    idade: number;
    email: string;
}

const styles = StyleSheet.create({
  carddecontato: {
    flex: 1,
   backgroundColor: '#312c49',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5%",
    gap: 5,
    borderRadius: 10,
  },
  textocontato: {
    color: 'white',
    fontSize: 20,
  },
titulo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
}
})