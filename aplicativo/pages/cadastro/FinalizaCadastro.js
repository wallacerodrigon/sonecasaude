import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_LOGIN, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import {InputTexto} from '../../components/input/InputTexto';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';

export default class FinalizaCadastro extends React.Component {
    static navigationOptions = {
        title: TELA_FINALIZA_CADASTRO.title,
      };

    constructor(props){
        super(props);
        this.state = {planoSaude: false, transporteEspecial: false, liTermos: false, descPlano: '', descTransporte: ''}, 

        this.togglePlanoSaude = this.togglePlanoSaude.bind(this);
        this.toggleTransporte = this.toggleTransporte.bind(this);
        this.toggleTermos = this.toggleTermos.bind(this);
        this.onChangePlano = this.onChangePlano.bind(this);
    }

    togglePlanoSaude(){
        this.setState({planoSaude: !this.state.planoSaude});
    }
    toggleTransporte(){
        this.setState({transporteEspecial: !this.state.transporteEspecial});
    }
    toggleTermos(){
        this.setState({liTermos: !this.state.liTermos});
    }
    onChangePlano(value){
        this.setState({planoSaude: value});
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                {/* <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Finalizar Cadastro</Text>
                </View> */}

                {/* aqui tem que ser um flatlist 
                                            /*onValueChange = {props.toggleSwitch1}*/
                            /*value = {props.switch1Value}*/                    
                }
                 <View style={[EstilosComuns.bodyMain]}>
                    {/* criar uma classe do tipo groupfield e um componente com texto e  */}
                    {/**usar o multiline para a escrita com 2 linhas no máximo */}
                    <View style={styles.card}>
                        <View style={styles.cardItem}>
                            <Text style={styles.cardItemLeft}>Possui plano de saúde?</Text>
                            <ConfirmacaoSwitch style={styles.cardItemRight} value={this.state.planoSaude} toggleSwitch={this.togglePlanoSaude}></ConfirmacaoSwitch>
                        </View>
                        <View>
                            <InputTexto  onChangeInput={value => this.setState({descPlano: value})}
                                maxLength={50} 
                                placeholder="Se sim, informe o nome da operadora" 
                                autoCapitalize="words"
                                editable={this.state.planoSaude}
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardItem}>
                            <Text style={styles.cardItemLeft}>Tem necessidade de transporte especial?</Text>
                            <ConfirmacaoSwitch style={styles.cardItemRight} value={this.state.transporteEspecial} toggleSwitch={this.toggleTransporte}></ConfirmacaoSwitch>
                        </View>
                        <View>
                            <InputTexto onChangeInput={value => this.setState({descTransporte: value})}
                                maxLength={100} 
                                placeholder="Se sim, descreva a necessidade (máx. 100)"
                                autoCapitalize="words"
                                multiline={true}
                                numberOfLines={2}
                                editable={this.state.transporteEspecial}
                            />
                        </View>

                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardItem}>
                            <Text style={styles.cardItemLeft}>Li e concordo  com os Termos de Uso  e Política de privacidade.</Text>
                            <ConfirmacaoSwitch style={styles.cardItemRight} value={this.state.liTermos} toggleSwitch={this.toggleTermos}></ConfirmacaoSwitch>
                        </View>
                    </View>

                </View>

                <View style={EstilosComuns.rodapeDuplo}>
                    <Botao tituloBotao='Concluir'  onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}
                        disabled={!this.state.liTermos}
                    />                
                    <Text style={styles.mensagemRodape}>Você receberá no seu e-mail orientações para ativar o seu usuário e cadastrar senha.</Text>
                </View>                
            </View>
        )
    };
}

const styles = StyleSheet.create({
    mensagemRodape: {
        textAlign: 'center'
    },

    card: {
        backgroundColor: '#ddd',
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