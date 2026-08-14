import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native"; // 1. Importe o ScrollView

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.cardsinfo}>
        <ThemedView style={styles.perfil}>
          <ThemedView style={styles.infoperfil}>
            <Image
              style={styles.icone}
              source={require("@/assets/images/keroppi-icone.jpg")}
              transition={1000}
            />
            <ThemedText style={styles.titulo}>@eraldorv#2005{"\n"}</ThemedText>
            <ThemedText style={styles.subtitulo}>
              assistidor de filme{"\n"}
              <ThemedText style={styles.subtitulo}>
                7 seguidores • 7 seguindo
              </ThemedText>
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.filmescarrosel}>
            <ThemedText style={styles.textopequenino}>
              Filmes Recentes:
            </ThemedText>


            <ThemedView style={styles.filmerecentes}>
    
              <Image
                style={styles.filme}
                source={require("@/assets/images/filmeu.jpg")}
                transition={1000}
              />
              <Image
                style={styles.filme}
                source={require("@/assets/images/filmed.jpg")}
                transition={1000}
              />
              <Image
                style={styles.filme}
                source={require("@/assets/images/filmet.jpg")}
                transition={1000}
              />
              <Image
                style={styles.filme}
                source={require("@/assets/images/filmeq.jpg")}
                transition={1000}
              />
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151518",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  icone: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  infoperfil: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    padding: 1,
    gap: 3,
  },
  titulo: {
    fontSize: 28,
    color: "#aeb4ff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    color: "#aeb4ff",
    fontSize: 12,
    textAlign: "center",
  },
  cardsinfo: {
    width: "100%",
    backgroundColor: "transparent",
  },
  perfil: {
    backgroundColor: "#221f3d",
    padding: 15,
    borderRadius: 1,
    gap: 2,
  },
  tituloCard: {
    fontSize: 25,
    color: "#aeb4ff",
    fontWeight: "bold",
  },
  textoqualquer: {
    color: "#aeb4ff5",
    fontSize: 14,
  },
  textopequenino: {
    color: "#aeb4ff",
    textAlign: "center",
    fontSize: 10,
  },
  filmescarrosel: {
    width: "100%",
    backgroundColor: "transparent",

  },
  filmerecentes: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  filme: {
    flex: 1,
    height: 150,
  },
});
