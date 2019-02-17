import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_ESQUECI_SENHA, TELA_LOGIN } from '../../constants/AppScreenData';
import InputTexto from '../../components/input/InputTexto';

export default class EsqueciSenha extends React.Component {
    static navigationOptions = {
        title: TELA_ESQUECI_SENHA.title,
      };


    constructor(props){
        super(props);

        this.state = {email: ''}
    }

    tratarInputEmail(value){
        this.setState({email: value})
    }  

    render() {
        return (
            <View style={[EstilosComuns.container]}>
                <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.textoTamanhoPadrao]}>
                    Para recuperar sua senha, informe o seu e-mail de cadastro abaixo e você receberá um link para ativação da sua conta com uma nova senha.

                </Text>
                <InputTexto placeholder="Informe seu E-mail " maxLength={40}
                    onChangeInput={value => this.tratarInputEmail(value)}
                    />

                <Botao tituloBotao='Enviar' onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerEsqueciSenha: {
        marginTop: 10,

    }
})