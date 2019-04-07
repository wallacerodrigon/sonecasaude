import React from 'react';
import {View, Text,ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';
import EstilosComuns, { BRANCO, VERDE } from '../../assets/estilos/estilos';
import { TELA_ADD_MEDICOS, TELA_HOME, TELA_ADD_CLINICA, TELA_LISTA_CLINICAS } from '../../constants/AppScreenData';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import Botao, { BotaoLoading, BotaoConfigIcon } from '../../components/botao/Botao';
import { Label, Icon } from 'native-base';
import { connect } from "react-redux";
import { salvarClinica, onChangeField, onChangeClinica, buscarEnderecoPorCep } from "../../actions/clinicas/CadastroClinicasAction";
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import Validador from '../../utilitarios/Validador';

class AdicionaClinica extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_CLINICA.title,
        /* No more header config here! */
      };

    onChangeInput(field, text){
        this.props.onChangeField(field, text);
    }

    temEnderecoPreenchido(){
        return this.props.nomeEstado != '' &&
            this.props.nomeCidade != '' &&
            this.props.nomeBairro != '' &&
            this.props.nomeLogradouro != '';
    }

    numeroEnderecoEstaValido(){
        if (this.props.numLocalEndereco != null &&
            this.props.numLocalEndereco != '' &&
            this.props.numLocalEndereco.replace(/[0-9]/g, '') != ''){
            return false;
        } 
        return true;
    }

    salvarClinica(){
        if (this.props.nomeClinica === null || this.props.nomeClinica.trim() === ''){
            MensagemInformativa('Informe o nome da clínica');
            return false;
        }

        if (this.props.numCep && !this.temEnderecoPreenchido() ){
            MensagemInformativa('Preencha os dados do endereço!');
            return false;
        }

        if (!this.numeroEnderecoEstaValido() ){
            MensagemInformativa('O campo número só deve conter números!');
            return false;
        }


        if (this.props.numTelefone != '' && ! new Validador().isTelefoneValido(this.props.numTelefone)){
            MensagemInformativa("O telefone está com formato inválido. Informe DDD + número!");
            return false;
        }        

        this.props.salvarClinica(this.props.clinica);
    }

    buscarCep(){
        if (new Validador().validaCEP(this.props.numCep)){
            this.props.buscarEnderecoPorCep(this.props.numCep);
        } else {
            MensagemInformativa('CEP inválido. CEP deve ter 8 dígitos!');
        }
    }

    componentDidUpdate(){
        if (this.props.bolSucesso){
            MensagemInformativa('Clínica salva com sucesso!');
            this.props.navigation.goBack();
        } else if (this.props.mensagemFalha && this.props.mensagemFalha != ''){
            MensagemInformativa(this.props.mensagemFalha);
        }

    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        console.log('did mount', params)
        if (params && params.clinica && params.medico){
            this.medico = params.medico;
            this.props.onChangeClinica(params.clinica)
        }
    }

    editaEndereco(){
        return this.props.codLogradouro === null || this.props.codLogradouro == '';
    }    

    render() {
        return (
        <ScrollView style={[EstilosComuns.container]} keyboardVerticalOffset={100} behavior="padding">
                <Text style={EstilosComuns.tituloJanelas}>Clínica</Text>
            
                <View style={styles.formulario}>
                        <InputTexto placeholder="Nome clínica" maxLength={40}
                                value={this.props.nomeClinica}
                                onChangeInput={value => this.onChangeInput('nomeClinica', value)}
                            />

                        <InputTextComMascara  style={[EstilosComuns.inputText]} 
                            onChangeText={text =>this.props.onChangeField('numTelefone', text)}
                            value={this.props.numTelefone}
                            placeholder="Digite o telefone/celular (xx)xxxxx-xxxx"
                            type={InputTextComMascara.MASK_CELULAR}
                        />                                   
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center'}}>
                            <View style={{flex: 8}}>
                                <InputTextComMascara placeholder="CEP"
                                    type={InputTextComMascara.MASK_CEP}
                                    value={this.props.numCep}
                                    onChangeText={text =>this.props.onChangeField('numCep', text)}
                                    />
                            </View>

                            <View style={{flex: 2}}>
                                <BotaoLoading tituloBotao="Buscar CEP" carregaLoading={this.props.loadingCep}  
                                    onClick={() => this.buscarCep()}
                                />
                            </View>
                       </View>


                        <InputTexto placeholder="Estado" maxLength={40}
                                value={this.props.nomeEstado}
                                editable={this.editaEndereco()}
                                onChangeInput={value => this.onChangeInput('nomeEstado', value)}
                            />
                        
                        <InputTexto placeholder="Cidade" maxLength={40}
                                editable={this.editaEndereco()}
                                value={this.props.nomeCidade}
                                onChangeInput={value => this.onChangeInput('nomeCidade',value)}
                            />
                        
                        <InputTexto placeholder="Bairro" maxLength={40}
                                editable={this.editaEndereco()}
                                value={this.props.nomeBairro}
                                onChangeInput={value => this.onChangeInput('nomeBairro',value)}
                            />
                        
                        <InputTexto placeholder="Logradouro" maxLength={40}
                                editable={this.editaEndereco()}
                                value={this.props.nomeLogradouro}
                                onChangeInput={value => this.onChangeInput('nomeLogradouro',value)}
                            />
                        
                        <InputTexto placeholder="Número" maxLength={60}
                                value={this.props.numLocalEndereco}
                                keyboardType={InputTexto.KEYBOARD_NUMBER}
                                onChangeInput={value => this.onChangeInput('numLocalEndereco',value)}
                            />
                        
                        <InputTexto placeholder="Complemento" maxLength={40}
                                value={this.props.descComplemento}
                                onChangeInput={value => this.onChangeInput('descComplemento', value)}
                            />
                </View>
                
                <View style={styles.rodape}>
                    <Botao tituloBotao='Salvar' onClick={() => this.salvarClinica()}/>    
                </View>
        </ScrollView>
        )
    };
}

const mapStateToProps = state => ({
    clinica: state.clinicaReducer.clinica,
    nomeClinica: state.clinicaReducer.clinica.nomeClinica,
    numCep: state.clinicaReducer.clinica.numCep, 
    nomeEstado: state.clinicaReducer.clinica.nomeEstado,
    nomeCidade: state.clinicaReducer.clinica.nomeCidade, 
    nomeBairro: state.clinicaReducer.clinica.nomeBairro, 
    codLogradouro: state.clinicaReducer.clinica.codLogradouro, 
    nomeLogradouro: state.clinicaReducer.clinica.nomeLogradouro, 
    numLocalEndereco: state.clinicaReducer.clinica.numLocalEndereco, 
    descComplemento: state.clinicaReducer.clinica.descComplemento,
    numTelefone: state.clinicaReducer.clinica.numTelefone,
    loading: state.clinicaReducer.loading,
    bolSucesso: state.clinicaReducer.bolSucesso,
    loadingCep: state.clinicaReducer.loadingCep,
    mensagemFalha: state.clinicaReducer.mensagemFalha
})

const styles = StyleSheet.create({
    formulario: {
        flex: 9,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'space-between'
    }, 

    rodape: {
        flex: 1
    }
})

export default connect(mapStateToProps, {salvarClinica, onChangeField, onChangeClinica, buscarEnderecoPorCep})(AdicionaClinica);