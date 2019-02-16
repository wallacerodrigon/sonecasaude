import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class AdicionaMedicamento extends React.Component {
    static navigationOptions = {
        title: 'AdicionaMedicamento',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>AdicionaMedicamento</Text>
            </View>
        )
    };
}

