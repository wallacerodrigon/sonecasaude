import React from 'react';
import {View, Text, FlatList} from 'react-native';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import { CADASTRO_PERFIL, TELA_DADOS_PESSOAIS} from '../../constants/AppScreenData'
import Botao, { BotaoOpacity, BotaoFechar } from '../../components/botao/Botao';
import {withNavigation} from 'react-navigation';

class PerfilCadastro extends React.Component {
//pensar nesse objeto como um método de uma classe estática ou sei lá o que. Que facilite a susa configuração
    static navigationOptions = {
        title: CADASTRO_PERFIL.title,
        headerLeft: ({navigation}) => (
            <BotaoFechar onClose={() => navigation.goBack()}/>
        )
      };

    perfisVisiveis = [
        {id: 1, nome: 'Paciente', ordem: 1},
        {id: 2, nome: 'Cuidador', ordem: 2}
    ];

    constructor(props){
        super(props);
        this.state = {idPerfil: 0};
       
    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

 
    gotoNextScreen(screen){
        this.props.navigation.navigate(screen.name)        
    }


    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Como você gostaria de utilizar o aplicativo?</Text>
                </View>
                
                <View style={EstilosComuns.bodyMain}>

                    <View>
                        <Text>
                            
                        </Text>
                    </View>                                    

                    <View style={{flexDirection: 'column', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <FlatList
                            data= {this.perfisVisiveis}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Botao tituloBotao={item.nome} onClick={() => this.gotoNextScreen(TELA_DADOS_PESSOAIS)}/>
                                );
                            }} 
                        />

                    </View>


                </View>
                
            </View>
        )
    };
}

export default withNavigation(PerfilCadastro);