import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {  TELA_ADD_SHARE_INFO, TELA_SHARE_INFO, TELA_ADD_SHARE_INFO_FROM_LIST } from '../../constants/AppScreenData';
import { List, ListItem, Left, Thumbnail, Body, Button, Right, Container, Fab, Icon } from 'native-base';
import Botao from '../../components/botao/Botao';

const imgComparacao = require('../../assets/img/share/pessoa1.jpeg');
const imgComparacao2 = require('../../assets/img/share/pessoa2.jpeg');
const imgComparacao3 = require('../../assets/img/share/pessoa3.jpeg');

export default class CompartilhaInformacoes extends React.Component {
    static navigationOptions = {
        title: TELA_SHARE_INFO.title
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Seus compartilhamentos</Text>

                <Container style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                    <List >
                        <ListItem thumbnail selected button>
                            <Left>
                                <Thumbnail square source={imgComparacao} />
                            </Left>
                            <Body>
                                <Text>Carlos da Silva 1</Text>
                                <Text note numberOfLines={1} style={EstilosComuns.negrito}>Filho</Text>
                                <Text note numberOfLines={1}>fulano@gmail.com</Text>
                            </Body>
                            <Right>
                                <TouchableHighlight >
                                    <Icon name="trash" active />
                                </TouchableHighlight>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail selected button>
                            <Left>
                                <Thumbnail square source={imgComparacao2} />
                            </Left>
                            <Body>
                                <Text>Flávia da Silva</Text>
                                <Text note numberOfLines={1} style={EstilosComuns.negrito}>Filha</Text>
                                <Text note numberOfLines={1}>fulano@gmail.com</Text>
                            </Body>
                            <Right>
                                <TouchableHighlight >
                                    <Icon name="trash" active />
                                </TouchableHighlight>
                            </Right>
                        </ListItem>


                        <ListItem thumbnail selected button>
                            <Left>
                                <Thumbnail square source={imgComparacao3} />
                            </Left>
                            <Body>
                                <Text>Cândida dos Santos</Text>
                                <Text note numberOfLines={1} style={EstilosComuns.negrito}>Cuidadora</Text>
                                <Text note numberOfLines={1}>fulano@gmail.com</Text>
                            </Body>
                            <Right>
                                <TouchableHighlight >
                                    <Icon name="trash" active />
                                </TouchableHighlight>
                            </Right>
                        </ListItem>

                    </List>

                </Container>

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_ADD_SHARE_INFO_FROM_LIST.name) }>
                     <Icon name="add" />
                </Fab>                   
            </View>
        )
    };
}

 