import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ComandoOuvindoVoz extends React.Component {
    static navigationOptions = {
        title: 'ComandoOuvindoVoz',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>ComandoOuvindoVoz</Text>
            </View>
        )
    };
}

