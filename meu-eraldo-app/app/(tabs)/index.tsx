import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import Alerta from "@/components/alert";
import ContatoCard from "@/components/contatoCard";


export default function HomeScreen() {
  return (
<ThemedView style={styles.container}>

  <ContatoCard contato={{nome: 'eraldorv', idade: 20, email: 'eraldorv15@gmail.com'}} />



  <Alerta type="sucesso"></Alerta>

  </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})