import React from 'react';
import {View, Text, Switch} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_LOGIN, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import InputTexto from '../../components/input/InputTexto';

export default class FinalizaCadastro extends React.Component {
    static navigationOptions = {
        title: TELA_FINALIZA_CADASTRO.title,
      };

    constructor(props){
        super(props);
        this.state = {planoSaude: false, transporteEspecial: false, liTermos: false}
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Finalizar Cadastro</Text>
                </View>

                {/* aqui tem que ser um flatlist 
                                            /*onValueChange = {props.toggleSwitch1}*/
                            /*value = {props.switch1Value}*/                    
                }
                 <View style={EstilosComuns.bodyMain}>
                    {/* criar uma classe do tipo groupfield e um componente com texto e  */}
                    <View style={{flex: 1}}>
                        <View>
                            <Text>Possui plano de saúde?</Text>
                            <Switch value={this.state.planoSaude}></Switch>
                        </View>
                    </View>

                    <View style={{flex: 1}}>
                        <View>
                            <Text>Tem necessidade de transporte especial?</Text>
                            <Switch value={this.state.planoSaude}></Switch>
                        </View>
                    </View>

                    <View style={{flex: 1}}>
                        <View>
                            <Text>Li e concordo  com os Termos de Uso  e Política de privacidade.</Text>
                            <Switch value={this.state.planoSaude}></Switch>
                        </View>
                    </View>

                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Concluir' onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}/>                
                </View>                
            </View>
        )
    };
}

