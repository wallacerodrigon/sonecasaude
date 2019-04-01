import React from 'react';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_LISTA_MEDICOS, TELA_ADD_MEDICOS, TELA_LISTA_CLINICAS, TELA_ADD_CLINICA, TELA_BUSCA_CLINICA } from '../../constants/AppScreenData';
import { List, ListItem, Left, Thumbnail, Body, Button, Right, Container, Fab, Icon } from 'native-base';
import Botao from '../../components/botao/Botao';

export default class ClinicasMedico extends React.Component {
    static navigationOptions = {
        title: TELA_LISTA_CLINICAS.title
        /* No more header config here! */
      };

      constructor(props){
        super(props);

        this.state = {nome: '', especialidade: '', email: ''}
    }      

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Container style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                    <List>
                        <ScrollView>
                            <ListItem button>
                                <Body>
                                    <Text>Clínica da Família</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>UPA Ceilândia</Text>
                                    <Text note numberOfLines={1}>
                                        (61) 99999-9999
                                        (61) 99999-9999
                                    </Text>
                                </Body>
                                <Right>
                                    <TouchableHighlight >
                                        <Icon name="trash" active />
                                    </TouchableHighlight>
                                </Right>
                            </ListItem>

                            <ListItem button>
                                <Body>
                                    <Text>Clínica Redecor</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>Águas Claras</Text>
                                    <Text note numberOfLines={1}>(61) 99999-9999</Text>
                                </Body>
                                <Right>
                                    <TouchableHighlight >
                                        <Icon name="trash" active />
                                    </TouchableHighlight>
                                </Right>
                            </ListItem>

                        </ScrollView>
                    </List>

                </Container>

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_BUSCA_CLINICA.name) }>
                     <Icon name="search" />
                </Fab>                   
            </View>
        )
    };
}

