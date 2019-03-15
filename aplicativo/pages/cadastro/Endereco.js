import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_ENDERECO, TELA_DESAFIOS} from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import {InputTexto, InputTextComMascara} from '../../components/input/InputTexto';

import { connect } from "react-redux";
import { onChangeField } from "../../actions/CadastroAction";

class Endereco extends React.Component {
    static navigationOptions = {
        title: TELA_ENDERECO.title,
      };

    buscarCep(){
        this.props.estado = "teste";
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
            <Text style={EstilosComuns.tituloJanelas}>Endereço</Text>
            
            <View style={styles.inputs}>
                <InputTextComMascara placeholder="CEP"
                    type={InputTextComMascara.MASK_CEP}
                    value={this.props.numCep}
                    onChangeText={text =>this.props.onChangeField('numCep', text)}
                    onBlur={this.buscarCep}
                    />
                <InputTexto placeholder="Estado" maxLength={40}
                    onChangeInput={text =>this.props.onChangeField('estado', text)}
                    value={this.props.nomeUsuario}
                    />
                <InputTexto placeholder="Cidade" maxLength={40}
                    onChangeInput={value => this.onChangeInput(value)}
                    onChangeInput={text =>this.props.onChangeField('cidade', text)}
                        value={this.props.nomeUsuario}
                    />
                <InputTexto placeholder="Bairro" maxLength={40}
                    onChangeInput={value => this.onChangeInput(value)}
                    onChangeInput={text =>this.props.onChangeField('bairro', text)}
                        value={this.props.nomeUsuario}
                    />
                <InputTexto placeholder="Logradouro" maxLength={40}
                    onChangeInput={value => this.onChangeInput(value)}
                    onChangeInput={text =>this.props.onChangeField('logradouro', text)}
                        value={this.props.nomeUsuario}
                    />
                <InputTexto placeholder="Número" maxLength={60}
                    keyboardType={InputTexto.KEYBOARD_NUMBER}
                    onChangeInput={text =>this.props.onChangeField('numero', text)}
                        value={this.props.nomeUsuario}
                    />
                <InputTexto placeholder="Complemento" maxLength={40}
                    onChangeInput={text =>this.props.onChangeField('complemento', text)}
                    value={this.props.nomeUsuario}
                    />

            </View>
            
            <View style={styles.rodape}>
                <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_DESAFIOS.name)}/>    
            </View>
        </View>            
        )
    };
}

const mapStateToProps = state => ({
    numCep: state.cadastroReducer.user.cep,
    numero: state.cadastroReducer.user.numero,
    complemento: state.cadastroReducer.user.complemento,
    estado:  state.cadastroReducer.user.complemento.estado,
    cidade:  state.cadastroReducer.user.complemento.cidade,
    bairro:  state.cadastroReducer.user.complemento.bairro,
    logradouro:  state.cadastroReducer.user.complemento.logradouro
})

export default connect(mapStateToProps, {onChangeField})(Endereco);

const styles= StyleSheet.create({
    inputs : {
        flex: 9,
        padding: 10
    },
    rodape: {
        flex: 1
    }
})