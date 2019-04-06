import { Fab, Icon } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoLoading, BotaoOpacity } from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import { MensagemConfirmacao, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_ADD_CLINICA, TELA_BUSCA_CLINICA } from '../../constants/AppScreenData';
import { onChangeFieldBusca, buscarClinica, vincularClinica, desvincularClinica } from "../../actions/clinicas/CadastroClinicasAction";

class ProcuraClinica extends React.Component {
    static navigationOptions = {
        title: TELA_BUSCA_CLINICA.title,
      };

    constructor(props){
        super(props);
    }
    
    buscarClinicas(){
        if (this.props.nomeClinica.trim() == ''){
            MensagemInformativa('Informe o nome da clínica para filtrar');
            return false;
        }
        this.props.buscarClinica(this.props.nomeClinica);
    }

    confirmarVinculo(clinica){

        if (! this.medico){
            MensagemInformativa('O médico deve ser selecionado!');
            return false;
        }

        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
                //todo: falta pegar o código do médico
                this.props.vincularClinica(clinica.idClinica, this.medico.idMedico);
                this.clinicaVinculada = clinica;
               // this.medico.clinicas.push( clinica );      
            },
            style: 'destructive'
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja vincular esta clinica ao Dr(a) ${this.medico.nomeMedico}? `, 
            [botaoConfirma, botaoDescarta]
        );        
    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        this.medico = params.medico ? params.medico : null;
    }

    componentDidUpdate(){
          if (this.props.bolVinculado || this.props.mensagemFalha != ''){
              MensagemInformativa(this.props.bolVinculado ? 'Ação efetuada com sucesso!' : this.props.mensagemFalha);

            //   if (this.props.bolVinculo){
            //       this.props.vinculaMedicoLocal(this.medicoVinculado);
            //   } 

         }
    }

    onChangeField(field,value){
        this.props.onChangeFieldBusca(field, value);
    }

    editarClinica(clinica){
        this.props.navigation.navigate(TELA_ADD_CLINICA.name, {clinica, medico:this.medico});
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Vincular clínica à médico</Text>
                {/* <Text style={[styles.nota, EstilosComuns.italico]}>Antes de incluir, verifique se a clínica já existe no aplicativo efetuando a busca pelos dados abaixo</Text> */}
                <View style={EstilosComuns.bodyMain}>
                    
                    <View style={styles.containerBusca}>
                        <InputTexto placeholder="Nome da clínica" maxLength={50}
                            autoCapitalize="characters"
                            value={this.props.nomeClinica}
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            onChangeInput={value => this.onChangeField('nomeClinica', value)}
                            />
                        <BotaoLoading carregaLoading={this.props.loading}  tituloBotao="Consultar" onClick={() => this.buscarClinicas()}/>
                    </View>

                    <View style={[styles.containerResultado]}>
                           <FlatList  
                                data= {this.props.listaClinicas}
                                keyExtractor={clinica => new String(clinica.idClinica)}
                                ListEmptyComponent= {
                                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.corVerde, styles.emptyResult]} >Nenhum resultado encontrado, informe os filtros para consultar!</Text>
                                }
                                renderItem = {clinica => {
                                    return (
                                        <BotaoOpacity onClick={()=> this.editarClinica(clinica.item)}>
                                            <View style={styles.containerMedico}>
                                                <View style={{flex: 9, flexDirection: 'column'}}>
                                                    <Text  style={EstilosComuns.negrito}>{clinica.item.nomeClinica}</Text>
                                                    <Text  style={EstilosComuns.italico}>{clinica.item.numTelefone}</Text>
                                                    <Text style={EstilosComuns.italico}>{clinica.item.nomeCidade != null ? clinica.item.nomeCidade : ''}</Text>
                                                </View>

                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Icon name="link" style={{color: 'blue'}} onPress={() => this.confirmarVinculo(clinica.item)} />        
                                                </View>                                                
                                            </View>                                    
                                        </BotaoOpacity>
                                    )
                                }}
                            />                           
                    </View>

                 <Fab
                    style={{ backgroundColor: VERDE }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_ADD_CLINICA.name)}>
                     <Icon name="add" />
                </Fab>                                         

                </View>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    nomeClinica: state.procuraClinicaReducer.nomeClinica,
    loading: state.procuraClinicaReducer.loading,
    buscaSucesso: state.procuraClinicaReducer.buscaSucesso,
    bolVinculado: state.procuraClinicaReducer.bolVinculado,
    mensagemFalha: state.procuraClinicaReducer.mensagemFalha,
    listaClinicas: state.procuraClinicaReducer.listaClinicas
})


const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        padding: 8

    },
    
    containerResultado: {
        flex: 5,
    },
    containerMedico: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_CINZA_CLARO        
    },
    tituloResultado: {
        borderBottomColor: FUNDO_CINZA_CLARO,
        borderBottomWidth: 1
    },
    nota: {
        fontSize: 15,
        textAlign: 'center'
        
    },

    emptyResult: {
        padding: 20,

    }

    
})

export default connect( mapStateToProps, 
    {onChangeFieldBusca, buscarClinica,vincularClinica, desvincularClinica}
    )
(ProcuraClinica);