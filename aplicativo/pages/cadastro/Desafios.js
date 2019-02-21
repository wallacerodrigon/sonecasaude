import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DESAFIOS, TELA_ADD_SHARE_INFO} from '../../constants/AppScreenData'
import Botao from '../../components/botao/Botao';
import InputTexto from '../../components/input/InputTexto';

export default class Desafios extends React.Component {
    static navigationOptions = {
        title: TELA_DESAFIOS.title
        /* No more header config here! */
      };

    itensMarcados = [];

    listaDesafios = () => {
        return [
            {id: 1, nome: 'HIPERTENSÃO ARTERIAL', selecionado: false},
            {id: 2, nome: 'COLESTEROL ALTO', selecionado: false},
            {id: 3, nome: 'INSUFICIÊNCIA RENAL', selecionado: false},
            {id: 4, nome: 'DEPRESSÃO', selecionado: false},
            {id: 5, nome: 'CÂNCER', selecionado: false},
            {id: 6, nome: 'ASMA', selecionado: false},
            {id: 7, nome: 'OBESIDADE', selecionado: false},
            {id: 8, nome: 'DIABETES', selecionado: false},
            {id: 9, nome: 'HIPOTIROIDISMO', selecionado: false},
            {id: 10, nome: 'ANTICONCEPCIONAL', selecionado: false},
            {id: 11, nome: 'GRAVIDEZ', selecionado: false},
            {id: 12, nome: 'ANSIEDADE', selecionado: false},
            {id: 13, nome: 'GRIPE', selecionado: false},
            {id: 14, nome: 'GASTRITE', selecionado: false},
            {id: 15, nome: 'TABAGISMO', selecionado: false},
            {id: 16, nome: 'H. PYLORI', selecionado: false},
        ]
    };

    constructor(props){
        super(props);
        this.state = {filtro: '', desafios: this.listaDesafios()};
        this.tratarFiltro = this.tratarFiltro.bind(this);
    }

    tratarFiltro(text) {
        this.setState({filtro: text})
    }

    registrarMarcado(item){
        let desafios = this.state.desafios.forEach(desafio => {
            if(desafio.id === item.id){
                desafio.selecionado = !desafio.selecionado;
            }
        })
        console.log(desafios)
        //this.setState({desafios})   
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Marque os desafios da saúde</Text>
                </View>

                {/* aqui tem que ser um flatlist */}
                <View style={EstilosComuns.bodyMain}>
                    <View style={styles.blocoBusca}>
                        <InputTexto
                        autoCapitalize="none"
                        onChangeInput={this.tratarFiltro}
                        placeholder="Informe um nome de desafio para filtrar" 
                        maxLength={40}/>
                    </View>

                    <View style={styles.blocoDesafios}>
                        <FlatList
                            data={this.state.desafios}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                <TouchableOpacity style={[styles.cardDesafio]}>
                                    <Text>{item.nome}</Text>
                                </TouchableOpacity>
                                );
                            }}
                            numColumns={2}
                        >

                        </FlatList>
                    </View>

                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_ADD_SHARE_INFO.name)}/>                
                </View>
            </View>
        )
    };
}

const styles= StyleSheet.create({
    blocoBusca: {
        flex: 1,
        padding: 5

    },
    blocoDesafios: {
        flex: 7,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    cardDesafio: {
        alignItems: "center",
        backgroundColor: "#fff",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0,
        textAlign: 'center',
        borderRadius: 30
    },
    itemMarcado: {
        backgroundColor: '#1637D5'
    }
})