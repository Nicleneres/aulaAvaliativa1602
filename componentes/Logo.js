import { StyleSheet, Image } from 'react-native';
import lua from '../assets/lua.png'

export default function Logo() {
    return (
        <Image style={estilos.Img} source={lua} />
    );
}

const estilos = StyleSheet.create({
    Img: {
        width: 100,
        height: 100,
        marginBottom: 50
      }    

});



