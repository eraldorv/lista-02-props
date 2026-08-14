import { StyleSheet, View, Text, Image} from "react-native";

export default function Alerta({ type }: { type: AlertaProps['type'];}) {
    return (
        <View style={styles.cardaviso}>
        <View style={styles.tipoaviso}>
            <Text style={styles[type]}> 
                {mensagem[type]}
            </Text>
            <Image
            source = {{ uri: img[type]}}
            style={styles.img}
            />       
        </View>
        </View>
    )
} 


interface AlertaProps {
  type: 'sucesso' | 'erro' | 'aviso';
  mensagem: string;
  img: string;
}

const img = {
    sucesso: 'https://i.pinimg.com/736x/41/2a/d9/412ad9752abe3959eae6426fe6f3e365.jpg',
    erro: 'https://i.pinimg.com/736x/3d/ab/cf/3dabcf886812b383ec597726abc1c1ab.jpg',
    aviso: 'https://i.pinimg.com/736x/0a/5e/ba/0a5ebaf1c7f1d081951b69399432d3fb.jpg',
}


const mensagem = {
    sucesso: 'cadastro realizado comn suceso!!! e meu nome e eraldo',
    erro: 'erro....!',
    aviso: 'cuidado...',
}

const styles = StyleSheet.create({
sucesso: {
   color: '#13b1b6',
   fontSize: 20,
   textShadowRadius: 10,
   textShadowColor: '#fdffff',
   fontStyle: 'italic',
},
erro: {
    color: '#ff4d4d',
    fontSize: 20,
    textShadowRadius: 10,
   textShadowColor: '#fdffff',
   fontStyle: 'italic',
},
aviso: {
    color: '#ffcc00',
    fontSize: 20,
    textShadowRadius: 10,
   textShadowColor: '#fdffff',
   fontStyle: 'italic',
},
cardaviso: {
    backgroundColor: '#191722',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: "10%",
    gap: 10,
},
tipoaviso: {
    backgroundColor: '#312c49',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5%",
    gap: 5,
    borderRadius: 10,
},
img: {
    width: 150,
    height: 150,
}
})


