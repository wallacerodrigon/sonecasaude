import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_SHARE_INFO, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import InputTexto from '../../components/input/InputTexto';

export default class AdicionaCompartilhamentoInfo extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_SHARE_INFO.title,
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Compartilhar as informações do aplicativo?</Text>
                </View>

                <View style={EstilosComuns.bodyMain}>
                    <InputTexto placeholder="CPF" maxLength={15}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="E-mail" maxLength={15}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Parentesco" maxLength={15}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <InputTexto placeholder="Celular" maxLength={15}
                        onChangeInput={value => this.tratarInputCpf(value)}
                        />
                    <Text>Compartilhar Informações:</Text>
                    <View style={styles.checkboxes}>
                        <Text>Transporte</Text>
                        <Text>Medicação</Text>
                    </View>
                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name)}/>    
                </View>            

            </View>
        )
    };
}

const styles = StyleSheet.create({
    checkboxes: {
        flex: 1,
        flexDirection: 'column',
        padding: 2
    }
})