import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_PRESCRICAO } from '../../constants/AppScreenData';

class PeriodicidadeMedicamento extends React.Component {

    periodicidade = [
        {sigla: 'D', nome: 'Todos os dias ou alguns dias da semana'},
        {sigla: 'A', nome: 'Dias alternados'}
    ];

    medicamento= '';

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    gotoPrescricao(siglaPeriodicidade){
        const { medicamento, detalheRemedio } = this.props.navigation.state.params;

        this.props.navigation.navigate(TELA_PRESCRICAO.name, {medicamento, sigla: siglaPeriodicidade, detalheRemedio});        
    }


    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={[EstilosComuns.tituloJanelas, EstilosComuns.textoCentralizado]}>
                        Qual a indicação do seu médico para tomar o medicamento?
                    </Text>
                </View>
                 
                <View style={[EstilosComuns.bodyMain, styles.containerCentral]}>

                        <View style={{flex: 1}}>
                            <Botao tituloBotao={this.periodicidade[0].nome} onClick={() => this.gotoPrescricao(this.periodicidade[0].sigla)}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Botao tituloBotao={this.periodicidade[1].nome} onClick={() => this.gotoPrescricao(this.periodicidade[1].sigla)}/>
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

    }
})


export default (PeriodicidadeMedicamento);