import { Body, Container, Fab, Icon, Left, List, ListItem, Right, Thumbnail } from 'native-base';
import React from 'react';
import {connect} from 'react-redux';


import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { BotaoFecharHeader, BotaoExcluir } from '../../components/botao/Botao';
import { TELA_ADD_MEDICOS } from '../../constants/AppScreenData';
import { buscarMeusMedicos, desvinculaMedicos } from "../../actions/MedicosAction";


const imgMedico1 = require('../../assets/img/medicos/medico1.jpeg');
const imgMedico2 = require('../../assets/img/medicos/medico2.jpeg');
const imgMedico3 = require('../../assets/img/medicos/medico3.jpeg');



class ListaMedicos extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });

    constructor(props){
        super(props);
    }
    
    compoonentDidMount(){
        this.props.buscarMeusMedicos();
    }

    componentDidUpdate(state){
        console.log('did update', state);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Seus médicos cadastrados</Text>

                <Container style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                    <List>
                        <ScrollView>
                            <ListItem thumbnail selected button>
                                <Body>
                                    <Text>Médico 1</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>Especialidade</Text>
                                    <Text note numberOfLines={1}>fulano@gmail.com</Text>
                                </Body>
                                <Right>
                                    <BotaoExcluir onPress={() => null} />
                                </Right>
                            </ListItem>

                            <ListItem thumbnail selected button>
                                <Body>
                                    <Text>Médico 2</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>Especialidade</Text>
                                    <Text note numberOfLines={1}>fulano@gmail.com</Text>
                                </Body>
                                <Right>
                                    <BotaoExcluir onPress={() => null} />
                                </Right>
                            </ListItem>

                            <ListItem thumbnail selected button>
                                <Body>
                                    <Text>Médico 3</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>Especialidade</Text>
                                    <Text note numberOfLines={1}>fulano@gmail.com</Text>
                                </Body>
                                <Right>
                                    <BotaoExcluir onPress={() => null} />
                                </Right>
                            </ListItem>
                        </ScrollView>
                    </List>

                </Container>
                {/* navigation.navigate(TELA_ADD_MEDICOS.name)}> */}
                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.buscarMeusMedicos()}>
                    
                     <Icon name="add" />
                </Fab>                   
            </View>
        )
    };
}

const mapStateToProps = state => ({
    listaMedicos: state.medicosReducer.listaMedicos
})

export default connect(mapStateToProps, {desvinculaMedicos, buscarMeusMedicos})(ListaMedicos);
