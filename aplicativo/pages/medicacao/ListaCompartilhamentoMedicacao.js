import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ListaCompartilhamentoMedicacao extends React.Component {
    static navigationOptions = {
        title: 'ListaCompartilhamentoMedicacao',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>ListaCompartilhamentoMedicacao</Text>
            </View>
        )
    };
}

