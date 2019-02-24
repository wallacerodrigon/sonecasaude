import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ControleMedicamento extends React.Component {
    static navigationOptions = {
        title: 'ControleMedicamento',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>ControleMedicamento</Text>
            </View>
        )
    };
}

