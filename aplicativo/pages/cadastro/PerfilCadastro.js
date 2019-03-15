import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_DADOS_PESSOAIS } from '../../constants/AppScreenData';
import { PERFIL_CUIDADOR, PERFIL_PACIENTE } from '../../constants/ConstantesInternas';

class PerfilCadastro extends React.Component {

    perfisVisiveis = [
        {id: 2, nome: 'Paciente', ordem: 1},
        {id: 3, nome: 'Cuidador', ordem: 2}
    ];

    constructor(props){
        super(props);
        this.state = {idPerfil: 0};
        this.close = this.close.bind(this);
    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    close(){
        this.props.navigation.goBack();
    }
 
    gotoNextScreen(screen, tipoPerfil){
        this.props.navigation.navigate(screen.name, {tipoPerfil: tipoPerfil})        
    }


    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Como você gostaria de utilizar o aplicativo?</Text>
                </View>
                
                <View style={[EstilosComuns.bodyMain, styles.containerCentral]}>

                    <View style={{flex: 1}}>
                        <Botao tituloBotao={this.perfisVisiveis[0].nome} onClick={() => this.gotoNextScreen(TELA_DADOS_PESSOAIS, PERFIL_PACIENTE)}/>
                    </View>

                    <View style={{flex: 1}}>
                        <Botao tituloBotao={this.perfisVisiveis[1].nome} onClick={() => this.gotoNextScreen(TELA_DADOS_PESSOAIS, PERFIL_CUIDADOR)}/>
                    </View>

                    <View style={{flex: 6}}/>
                </View>
                
            </View>
        )
    };
}

const styles= StyleSheet.create({
    containerCentral: {
        padding: 20,
        height: 200
    }
})


export default (PerfilCadastro);