import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        style={styles.icone}
        source={require("@/assets/images/keroppi-icone.jpg")}
        transition={1000}
      />

      <ThemedView style={styles.header}>
        <ThemedText style={styles.titulo}>@ERALDORV</ThemedText>
        <ThemedText style={styles.subtitulo}>
          Eraldo Ribeiro || Artista Digital
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.cardsinfo}>
        <ThemedView style={styles.infoum}>
          <ThemedText style={styles.tituloCard}>meus_contatos</ThemedText>
          <ThemedText style={styles.textoqualquer}>
            eraldorv15@gmail.com
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.cardois}>
        <ThemedText style={styles.textopequenino}>
          "Bad dreams in the night{"\n"}
          They told me I was going to lose the fight{"\n"}
          Leave behind my Wuthering, Wuthering{"\n"}
          Wuthering Heights"
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#beff55",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  icone: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  header: {
    alignItems: "center",
    gap: 1,
    backgroundColor: "transparent",
  },
  titulo: {
    fontSize: 28,
    color: "#367205",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontStyle: "italic",
    color: "#367205",
    fontSize: 12,
    textAlign: "center",
  },
  cardsinfo: {
    width: "45%",
    backgroundColor: "transparent",
  },
  infoum: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    gap: 5,
  },
  tituloCard: {
    fontSize: 25,
    color: "#367205",
    fontWeight: "bold",
  },
  textoqualquer: {
    color: "#367205",
    fontSize: 14,
  },
  textopequenino: {
    color: "#6a8b4e",
    textAlign: "center",
    fontSize: 10,
  },
  cardois: {
    width: "40%",
    backgroundColor: "transparent",
  },
});
