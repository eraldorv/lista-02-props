import { StyleSheet, View, Text } from "react-native";

export default function Alerta({ type }: { type: AlertaProps['type'];}) {
    return (
        <View style={styles.cardaviso}>
            <Text style={styles[type]}> 
                {mensagem[type]}
            </Text>
        </View>
    )
} 


interface AlertaProps {
  type: 'sucesso' | 'erro' | 'aviso';
  mensagem: string;
}

const mensagem = {
    sucesso: 'cadastro realizado comn suceso!!! e meu nome e eraldo',
    erro: 'erro....!',
    aviso: 'cuidado.',
}

const styles = StyleSheet.create({
sucesso: {
   backgroundColor: '#2eb613',
   fontSize: 20,
},
erro: {
    backgroundColor: '#ff4d4d',
    fontSize: 20,
},
aviso: {
    backgroundColor: '#ffcc00',
    fontSize: 20,
},
cardaviso: {
    backgroundColor: '#191722',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: "10%",
}
})


