import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ListaMedicos extends React.Component {
    static navigationOptions = {
        title: 'ListaMedicos',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>ListaMedicos</Text>
            </View>
        )
    };
}

