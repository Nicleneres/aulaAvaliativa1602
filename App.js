import { StyleSheet, View } from 'react-native';
import Logo from './componentes/Logo'
import Descricao from './componentes/Descricao'


export default function App() {
  return (
    <View style={estilos.container}>
      <Logo/>
      <Descricao/>
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
  
});
