import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../../assets/estilos/estilos';
import { TELA_CADASTRO_MEDICAMENTO, TELA_PRESCRICAO } from '../../constants/AppScreenData';
import { Icon, Item } from 'native-base';
import {InputTexto} from "../../components/input/InputTexto";
import Botao, { BotaoOpacity } from '../../components/botao/Botao';
import StatusBar from '../../components/statusBar/StatusBar';

export default class CadastroMedicamento extends React.Component {
    static navigationOptions = {
        title: TELA_CADASTRO_MEDICAMENTO.title,
      };

    constructor(props){
        super(props);
    }    
    
    getResultadoFiltro(){
        return [
            {id: 1, nomeMedicamento: 'Xarope 1', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 2, nomeMedicamento: 'Xarope 2', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 3, nomeMedicamento: 'Xarope 3', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 4, nomeMedicamento: 'Xarope 4', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"}
        ]
    }

    gotoPrescricao(medicamento){
        this.props.navigation.navigate(TELA_PRESCRICAO.name)
    }

    render() {
        return (
            <View style={EstilosComuns.container}>                
                <View style={styles.containerBusca}>
                    <View style={{flex: 9}}>
                        <InputTexto placeholder="Pesquise por um remédio" maxLength={40}
                            onChangeInput={this.tratarFiltro}
                            autoCapitalize="none"
                        />                    
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name="search" color={BRANCO} size={25} />
                    </View>
                </View>

                <View style={styles.containerResultado}>
                    <FlatList
                        data={this.getResultadoFiltro()}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.containerRemedioResultado}>
                                    <BotaoOpacity onClick={()=> this.gotoPrescricao(item)} >
                                        <Text style={styles.dadosMedicamento} >{item.nomeMedicamento}</Text>
                                        <Text style={styles.dadosMedicamento} >{item.principioAtivo}</Text>
                                        <Text style={styles.dadosMedicamento} >{item.laboratorio}</Text>
                                        <Text style={styles.dadosMedicamentoItalico} >{item.detalhes}</Text>
                                    </BotaoOpacity>
                                </View>
                            );                            
                        }}/>

              

                </View>

                <View style={styles.containerRodape}>
                    <Text style={[EstilosComuns.corVerde, EstilosComuns.textoCentralizado]}>
                        Clique sobre o remédio para cadastrar sua prescrição
                    </Text>
                </View>

            </View>
        )
    };
}


const styles= StyleSheet.create({

    containerBusca: {
        flex: 1,
        padding: 5,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_ESCURO
    },

    containerResultado: {
        flex: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },  

    containerRemedioResultado: {
        flex: 1,
        borderBottomColor: BRANCO,
        borderBottomWidth:1,
        padding: 3
    },
    
    containerRodape: {
        flex: 1,
        padding: 5
    },

    dadosMedicamento: {
        fontSize: 14,
        fontWeight: 'bold',
    },    

    dadosMedicamentoItalico:{
        fontStyle: 'italic'
    }
})
