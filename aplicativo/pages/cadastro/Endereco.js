import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_ENDERECO, TELA_DESAFIOS} from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import InputTexto from '../../components/input/InputTexto';

export default class Endereco extends React.Component {
    static navigationOptions = {
        title: TELA_ENDERECO.title,
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
            <Text style={EstilosComuns.tituloJanelas}>Endereço</Text>
            
            <View style={styles.inputs}>
                <InputTexto placeholder="CEP" maxLength={11}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Estado" maxLength={40}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Cidade" maxLength={40}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Bairro" maxLength={40}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Logradouro" maxLength={40}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Número" maxLength={60}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />
                <InputTexto placeholder="Complemento" maxLength={40}
                    onChangeInput={value => this.tratarInputCpf(value)}
                    />

            </View>
            
            <View style={styles.rodape}>
                <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_DESAFIOS.name)}/>    
            </View>
        </View>            
        )
    };
}

const styles= StyleSheet.create({
    inputs : {
        flex: 9,
        padding: 10
    },
    rodape: {
        flex: 1
    }
})