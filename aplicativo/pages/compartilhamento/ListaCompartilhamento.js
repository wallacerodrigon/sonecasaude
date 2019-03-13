import { Body, Container, Fab, Icon, Left, List, ListItem, Right, Thumbnail } from 'native-base';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_COMPARTILHAMENTO_LIST, TELA_LISTA_COMPARTILHAMENTO } from '../../constants/AppScreenData';
import { BotaoFecharHeader, BotaoExcluir } from '../../components/botao/Botao';

const imgComparacao = require('../../assets/img/share/pessoa1.jpeg');
const imgComparacao2 = require('../../assets/img/share/pessoa2.jpeg');
const imgComparacao3 = require('../../assets/img/share/pessoa3.jpeg');

export default class ListaCompartilhamento extends React.Component {
      static navigationOptions = ({ navigation }) => ({
        title: TELA_LISTA_COMPARTILHAMENTO.title,
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });

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
                                <BotaoExcluir onPress={() => null} />
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
                                <BotaoExcluir onPress={() => null} />
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
                                <BotaoExcluir onPress={() => null} />
                           </Right>
                        </ListItem>

                    </List>

                </Container>

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_ADD_COMPARTILHAMENTO_LIST.name) }>
                     <Icon name="add" />
                </Fab>                   
            </View>
        )
    };
}

 
