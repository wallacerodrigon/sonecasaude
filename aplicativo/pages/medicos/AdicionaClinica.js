import React from 'react';
import {View, Text,ScrollView, KeyboardAvoidingView} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_MEDICOS, TELA_HOME, TELA_ADD_CLINICA, TELA_LISTA_CLINICAS } from '../../constants/AppScreenData';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import Botao from '../../components/botao/Botao';
import { Label } from 'native-base';
import { connect } from "react-redux";
import { salvarClinica, onChangeField } from "../../actions/clinicas/CadastroClinicasAction";
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
        return this.props.numLocalEndereco != '' &&
                new Validador().mantemSomenteNumeros(this.props.numLocalEndereco).length() === this.props.numLocalEndereco.length()
    }

    salvarClinica(){
        if (this.props.nomeClinica === null || this.props.nomeClinica.trim() === ''){
            MensagemInformativa('Informe o nome da clínica');
            return false;
        }

        if (this.props.numCep != '' && !this.temEnderecoPreenchido() ){
            MensagemInformativa('Preencha os dados do endereço!');
            return false;
        }

        if (this.props.numCep != '' && this.temEnderecoPreenchido() && this.numeroEnderecoEstaValido ){
            MensagemInformativa('O campo número só deve conter números!');
            return false;
        }


        if (this.props.numTelefone != '' && ! new Validador().isTelefoneValido(this.props.numTelefone)){
            MensagemInformativa("O telefone está com formato inválido. Informe DDD + número!");
            return false;
        }        

        this.props.salvarClinica(this.props.clinica);
    }

    componentDidUpdate(){
        if (this.props.bolSucesso){
            MensagemInformativa('Clínica salva com sucesso!');
            this.props.navigation.goBack();
        } else if (this.props.mensagemFalha != ''){
            MensagemInformativa(this.props.mensagemFalha);
        }

    }

    render() {
        return (
        <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={100} behavior="padding" enabled>
            <ScrollView>
                <Text style={EstilosComuns.tituloJanelas}>Adicionar clínica</Text>
            
                <View style={EstilosComuns.bodyMain}>
                    <ScrollView>
                        <InputTexto placeholder="Nome clínica" maxLength={40}
                                value={this.props.nomeClinica}
                                onChangeInput={value => this.onChangeInput('nomeClinica', value)}
                            />
                        
                        <InputTextComMascara placeholder="CEP"
                                type={InputTextComMascara.MASK_CEP}
                                value={this.props.numCep}
                                onChangeText={value => this.onChangeInput('numCep',value)}
                                />

                        <InputTextComMascara  style={[EstilosComuns.inputText]} 
                            onChangeText={text =>this.props.onChangeField('numTelefone', text)}
                            value={this.props.numTelefone}
                            placeholder="Digite o telefone/celular (xx)xxxxx-xxxx"
                            type={InputTextComMascara.MASK_CELULAR}
                        />                                   

                        <InputTexto placeholder="Estado" maxLength={40}
                                value={this.props.nomeEstado}
                                onChangeInput={value => this.onChangeInput('nomeEstado', value)}
                            />
                        
                        <InputTexto placeholder="Cidade" maxLength={40}
                                value={this.props.nomeCidade}
                                onChangeInput={value => this.onChangeInput('nomeCidade',value)}
                            />
                        
                        <InputTexto placeholder="Bairro" maxLength={40}
                                value={this.props.nomeBairro}
                                onChangeInput={value => this.onChangeInput('nomeBairro',value)}
                            />
                        
                        <InputTexto placeholder="Logradouro" maxLength={40}
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
                    </ScrollView>

                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Salvar' onClick={() => this.salvarClinica()}/>    
                </View>
            </ScrollView>  
        </KeyboardAvoidingView>
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
    numLocalEndereco: state.clinicaReducer.clinica.numEndereco, 
    descComplemento: state.clinicaReducer.clinica.nomeComplemento,
    numTelefone: state.clinicaReducer.clinica.numTelefone,
    loading: state.clinicaReducer.loading,
    bolSucesso: state.clinicaReducer.bolSucesso,
    mensagemFalha: state.clinicaReducer.mensagemFalha
})

export default connect(mapStateToProps, {salvarClinica, onChangeField})(AdicionaClinica);