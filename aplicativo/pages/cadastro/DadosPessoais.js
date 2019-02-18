import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DADOS_PESSOAIS, TELA_ENDERECO, TELA_LOGIN} from '../../constants/AppScreenData'
import Botao from '../../components/botao/Botao';
import InputTexto from '../../components/input/InputTexto';
import CommandLink from '../../components/botao/CommandLink';

export default class DadosPessoais extends React.Component {
//pensar nesse objeto como um método de uma classe estática ou sei lá o que. Que facilite a susa configuração
    static navigationOptions = {
        title: TELA_DADOS_PESSOAIS.title
      };

    constructor(props){
        super(props);
    }

    tratarInputCpf(text){

    }

    voltaParaLogin(){
        this.props.navigation.navigate(TELA_LOGIN.name)
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Seus dados</Text>
                </View>
                
                <View style={EstilosComuns.bodyMain}>
                    <InputTexto placeholder="CPF" maxLength={15}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="E-mail" maxLength={40}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Nome Completo" maxLength={60}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Data de Nascimento" maxLength={40}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Celular" maxLength={40}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Sexo" maxLength={40}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />

                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_ENDERECO.name)}/>
                </View>
            </View>
        )
    };
}
