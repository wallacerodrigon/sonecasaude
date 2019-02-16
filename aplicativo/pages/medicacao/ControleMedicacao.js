import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ControleMedicacao extends React.Component {
    static navigationOptions = {
        title: 'TelaControle',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>TelaControle</Text>
            </View>
        )
    };
}

