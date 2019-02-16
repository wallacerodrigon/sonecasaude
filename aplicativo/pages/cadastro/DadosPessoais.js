import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DADOS_PESSOAIS, TELA_ENDERECO} from '../../constants/AppScreenData'
import Botao from '../../components/botao/Botao';

export default class DadosPessoais extends React.Component {
//pensar nesse objeto como um método de uma classe estática ou sei lá o que. Que facilite a susa configuração
    static navigationOptions = {
        title: TELA_DADOS_PESSOAIS.title
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>DadosPessoais</Text>
                <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_ENDERECO.name)}/>

            </View>
        )
    };
}

