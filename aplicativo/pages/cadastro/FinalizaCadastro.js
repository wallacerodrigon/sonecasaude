import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import EstilosComuns, { FUNDO, VERDE } from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';
import { TELA_FINALIZA_CADASTRO, TELA_LOGIN } from '../../constants/AppScreenData';

import { cadastrarUsuario, onChangeField, onToggleField } from "../../actions/CadastroAction";
import { connect } from "react-redux";
import { MensagemErro, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { PERFIL_PACIENTE, PERFIL_CUIDADOR } from "../../constants/ConstantesInternas";

class FinalizaCadastro extends React.Component {
    static navigationOptions = {
        title: TELA_FINALIZA_CADASTRO.title,
      };

    constructor(props){
        super(props);
    }

    togglePlanoSaude(){
        this.props.onToggleField('bolPlanoSaude');
    }
    toggleTransporte(){
        this.props.onToggleField('bolTransporte');
    }
    toggleTermos(){
        this.props.onToggleField('bolConcordouTermo');
    }

    finalizarCadastro(){
        this.props.navigation.navigate(TELA_LOGIN.name);
    }

    componentDidUpdate(){
        if (this.props.bolExecutado && this.props.bolSalvo){
            this.finalizarCadastro();
        } 
    }

    salvarCadastro(){
        if (this.props.bolPlanoSaude && this.props.nomePlanoSaude.trim() == ""){
            MensagemInformativa('Favor informar o nome da operadora do plano de saúde!');
            return;
        }
        if (this.props.bolTransporte && this.props.descTransporte.trim() == ""){
            MensagemErro('Favor descrever as necessidades que você tem com transporte!');
            return;
        }

        this.props.cadastrarUsuario(this.props.user);
    }

    isCuidador(){
        return this.props.codPerfil === PERFIL_CUIDADOR;
    }

    renderBotao(){
        if (this.props.loading){
            return <ActivityIndicator style={{color: VERDE}} />
        } else {
           return <Botao tituloBotao='Concluir'  onClick={() =>  this.salvarCadastro()}
                disabled={!this.props.bolConcordouTermo}
        /> 
        }
    }

    renderPlanoSaude(){
        return this.props.codPerfil === PERFIL_PACIENTE &&
                <View style={styles.card}>
                    <View style={styles.cardItem}>
                        <Text style={styles.cardItemLeft}>Possui plano de saúde?</Text>
                        <ConfirmacaoSwitch style={styles.cardItemRight} value={this.props.bolPlanoSaude} 
                            toggleSwitch={()=>this.togglePlanoSaude()}></ConfirmacaoSwitch>
                    </View>
                    <View>
                        <InputTexto  onChangeInput={value => this.props.onChangeField('nomePlanoSaude', value) }
                            maxLength={50} 
                            value={this.props.nomePlanoSaude}
                            placeholder="Se sim, informe o nome da operadora" 
                            autoCapitalize="words"
                            editable={this.props.bolPlanoSaude}
                        />
                    </View>
                </View>         

    }

    renderTransporte(){
        return this.props.codPerfil === PERFIL_PACIENTE &&
                <View style={styles.card}>
                    <View style={styles.cardItem}>
                        <Text style={styles.cardItemLeft}>Tem necessidade de transporte especial?</Text>
                        <ConfirmacaoSwitch style={styles.cardItemRight} value={this.props.bolTransporte} 
                        toggleSwitch={()=>this.toggleTransporte()}></ConfirmacaoSwitch>
                    </View>
                    <View>
                        <InputTexto onChangeInput={value => this.props.onChangeField('descTransporte', value)}
                            maxLength={100} 
                            placeholder="Se sim, descreva a necessidade (máx. 100)"
                            autoCapitalize="words"
                            multiline={true}
                            numberOfLines={2}
                            value={this.props.descTransporte}
                            editable={this.props.bolTransporte}
                        />
                    </View>
            
                </View>        
    }

    render() {
        return (
            <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={100} behavior="padding" enabled>
                 <View style={[EstilosComuns.bodyMain]}>
                    {/* criar uma classe do tipo groupfield e um componente com texto e  */}
                    {/**usar o multiline para a escrita com 2 linhas no máximo */}

                    { this.renderPlanoSaude() }
                    { this.renderTransporte() }     

                    <View style={styles.card}>
                        <View style={styles.cardItem}>
                            <Text style={styles.cardItemLeft}>Li e concordo  com os Termos de Uso  e Política de privacidade.</Text>
                            <ConfirmacaoSwitch style={styles.cardItemRight} value={this.props.bolConcordouTermo} 
                             toggleSwitch={()=>this.toggleTermos()}></ConfirmacaoSwitch>
                        </View>
                    </View>

                </View>

                <View style={EstilosComuns.rodapeDuplo}>
                    {this.renderBotao()}               
                    <Text style={styles.mensagemRodape}>Você receberá no seu e-mail orientações para ativar o seu usuário e cadastrar senha.</Text>
                </View>                
            </KeyboardAvoidingView>
        )
    };
}

const mapStateToProps = state => ({
    bolPlanoSaude: state.cadastroReducer.user.bolPlanoSaude,
    nomePlanoSaude:  state.cadastroReducer.user.nomePlanoSaude,
    bolTransporte:  state.cadastroReducer.user.bolTransporte,
    descTransporte:  state.cadastroReducer.user.descTransporte,
    bolConcordouTermo:  state.cadastroReducer.user.bolConcordouTermo,
    loading: state.cadastroReducer.loading,
    bolSalvo: state.cadastroReducer.bolSalvo,
    descMensagemFalha: state.cadastroReducer.descMensagemFalha,
    bolExecutado: state.cadastroReducer.bolExecutado,
    user: state.cadastroReducer.user,
    codPerfil: state.cadastroReducer.user.codPerfil
})

export default connect(mapStateToProps, {cadastrarUsuario, onChangeField, onToggleField})(FinalizaCadastro);

const styles = StyleSheet.create({
    mensagemRodape: {
        textAlign: 'center'
    },

    card: {
        backgroundColor: FUNDO,
        padding: 10,
    },

    cardItem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingLeft: 3,
        paddingRight: 3
    },
    cardItemLeft: {
        flex: 8
    },

    cardItemRight: {
        flex: 2
    }

})