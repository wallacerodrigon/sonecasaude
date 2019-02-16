import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class FotoPerfil extends React.Component {
    static navigationOptions = {
        title: 'Perfil',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>FotoPerfil</Text>
            </View>
        )
    };
}

