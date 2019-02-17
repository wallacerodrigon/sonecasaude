import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_SHARE_INFO, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';

export default class AdicionaCompartilhamentoInfo extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_SHARE_INFO.title,
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                 <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name)}/>    

            </View>
        )
    };
}

