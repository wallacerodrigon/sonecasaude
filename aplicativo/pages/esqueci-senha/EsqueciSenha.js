import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_ESQUECI_SENHA, TELA_LOGIN } from '../../constants/AppScreenData';
import {InputTexto} from '../../components/input/InputTexto';

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
                <View style={{flex: 1}}>
                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.textoTamanhoPadrao]}>
                        Para recuperar sua senha, informe o seu e-mail de cadastro. Você receberá no e-mail um link para ativação de uma nova senha.

                    </Text>
                </View>

                <View style={{flex: 1}}>
                    <InputTexto placeholder="Informe seu E-mail " maxLength={40}
                        onChangeInput={value => this.tratarInputEmail(value)}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        />
                </View>

                <View style={{flex: 8}}>
                    <Botao style={styles.botaoEnviar} tituloBotao='Enviar' onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}/>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerEsqueciSenha: {
        marginTop: 10,
    },
    botaoEnviar: {
        marginTop: 15
    }
})