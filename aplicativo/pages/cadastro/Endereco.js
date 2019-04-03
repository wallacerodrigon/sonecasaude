import React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { buscarCep, onChangeField } from "../../actions/CadastroAction";
import EstilosComuns, { VERDE } from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import { MensagemErro, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_ENDERECO, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Validador from '../../utilitarios/Validador';

class Endereco extends React.Component {
    static navigationOptions = {
        title: TELA_ENDERECO.title,
      };

    constructor(props){
        super(props);
    }

    buscarCep(){

       if (new Validador().validaCEP(this.props.numCep)){
           this.props.buscarCep(this.props.numCep);
       }  else {
           MensagemInformativa('CEP inválido. CEP deve ter 8 dígitos!');
       }
    }

    componentDidUpdate(){
        if (this.props.descMensagemFalha){
            MensagemErro(this.props.descMensagemFalha);
        }
    }

    isPreencheLogradouro(){
        return this.props.idLogradouro === null;
    }

    dadosValidos(){
        if (this.props.idLogradouro > 0 && this.props.numCep != ''){
            return true;
        } else if (this.props.idLogradouro === null && 
                   this.props.estado.trim() != '' && 
                   this.props.cidade.trim() != '' && 
                   this.props.bairro.trim() != '' &&
                   this.props.logradouro.trim() != ''){
            return true;
        } else {
            return false;
        }


    }

    salvarEndereco(){
        if (this.props.numero != null && this.props.numero.trim() != ''){
            if (this.props.numero.replace(/[0-9]/g, '') != ''){
                MensagemInformativa('O campo número deve conter somente números!');
                return false;
            }
        }

        let cepValido = new Validador().validaCEP(this.props.numCep);
        if (this.dadosValidos() && cepValido){
            this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name);        
        } else if (! cepValido){
            MensagemInformativa('CEP inválido. CEP deve ter 8 dígitos!');
        } else {
            MensagemInformativa('Preencha corretamente os dados do seu endereço e também o complemento!');
        }
    }

    renderIndicator(){
        if (this.props.loading){
            return <ActivityIndicator style={styles.loading} />
        } else {
            return <Botao tituloBotao="Buscar CEP"  onClick={()=>this.buscarCep()}/>
        }
    }

    render() {
        return (
        <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={100} behavior="padding" enabled>
            <ScrollView>
                <Text style={EstilosComuns.tituloJanelas}>Endereço</Text>
                
                <View style={styles.inputs}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center'}}>
                        <View style={{flex: 8}}>
                            <InputTextComMascara placeholder="CEP"
                                type={InputTextComMascara.MASK_CEP}
                                value={this.props.numCep}
                                onChangeText={text =>this.props.onChangeField('numCep', text)}
                                />
                        </View>

                        <View style={{flex: 2}}>
                            {this.renderIndicator()}
                            
                        </View>
                    </View>

                    <InputTexto placeholder="Estado" maxLength={40}
                        onChangeInput={text =>this.props.onChangeField('estado', text)}
                        value={this.props.estado}
                        editable={this.isPreencheLogradouro()}
                        />
                    <InputTexto placeholder="Cidade" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        onChangeInput={text =>this.props.onChangeField('cidade', text)}
                        editable={this.isPreencheLogradouro()}
                            value={this.props.cidade}
                        />
                    <InputTexto placeholder="Bairro" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        onChangeInput={text =>this.props.onChangeField('bairro', text)}
                        editable={this.isPreencheLogradouro()}
                            value={this.props.bairro}
                        />
                    <InputTexto placeholder="Logradouro" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        onChangeInput={text =>this.props.onChangeField('logradouro', text)}
                        editable={this.isPreencheLogradouro()}
                            value={this.props.logradouro}
                        />
                    <InputTexto placeholder="Número" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_NUMBER}
                        onChangeInput={text =>this.props.onChangeField('numero', text)}
                            value={this.props.numero}
                        />
                    <InputTexto placeholder="Complemento" maxLength={40}
                        onChangeInput={text =>this.props.onChangeField('complemento', text)}
                        value={this.props.complemento}
                        />

                </View>
                
                <View style={styles.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() => this.salvarEndereco()}/>    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        )
    };
}

const mapStateToProps = state => ({
    numCep: state.cadastroReducer.user.numCep,
    estado:  state.cadastroReducer.user.estado,
    cidade:  state.cadastroReducer.user.cidade,
    bairro:  state.cadastroReducer.user.bairro,
    idLogradouro:  state.cadastroReducer.user.idLogradouro,
    logradouro:  state.cadastroReducer.user.logradouro,
    numero: state.cadastroReducer.user.numero,
    complemento: state.cadastroReducer.user.complemento,
    bolExecutado: state.cadastroReducer.bolExecutado,
    loading: state.cadastroReducer.loading,
    descMensagemFalha: state.cadastroReducer.descMensagemFalha
})

export default connect(mapStateToProps, {onChangeField, buscarCep})(Endereco);

const styles= StyleSheet.create({
    inputs : {
        flex: 9,
        padding: 10
    },
    rodape: {
        flex: 1
    },
    loading: {
        color: VERDE,
        
    }
})