import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import lua from './assets/lua.png'

export default function App() {
  return (
    <View style={estilos.container}>
       <Image style={estilos.Img} source={lua} />

       <View style={estilos.boxTexto}>
         <Text style={estilos.titulo}>Lua</Text>
         <Text style={estilos.texto}>A lua é o satelite natural do <Text style={estilos.destaque}>planeta terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
       
       </View>
    <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 30,
  },
  Img: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
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
});
