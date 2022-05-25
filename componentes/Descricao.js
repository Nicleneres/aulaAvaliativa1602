import { StyleSheet, Text, View } from 'react-native';

export default function Descricao() {
    return (
        <View style={estilos.boxTexto}>
        <Text style={estilos.titulo}>Lua</Text>
        <Text style={estilos.texto}>A lua é o satelite natural do <Text style={estilos.destaque}>planeta terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
        </View>
          );
}
const estilos = StyleSheet.create({
    boxTexto: {
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'dotted',
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 25,
      },
      titulo: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
      },
      texto: {
        color: '#fff',
        textAlign: 'center'
      },
      destaque: {
        fontstyle: 'italic',
        fontWeight: 'bold'
      }
})
// meu nome


