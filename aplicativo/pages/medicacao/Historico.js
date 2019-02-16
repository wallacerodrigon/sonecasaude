import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Historico extends React.Component {
    static navigationOptions = {
        title: 'Historico',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>Historico</Text>
            </View>
        )
    };
}

