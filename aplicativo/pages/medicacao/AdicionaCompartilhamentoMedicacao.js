 import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class AdicionaCompartilhamentoMedicacao extends React.Component {
    static navigationOptions = {
        title: 'AdicionaCompartilhamentoMedicacao',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>AdicionaCompartilhamentoMedicacao</Text>
            </View>
        )
    };
}

