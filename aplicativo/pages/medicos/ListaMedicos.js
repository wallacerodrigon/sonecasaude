import { Body, Container, Fab, Icon, Left, List, ListItem, Right, Thumbnail } from 'native-base';
import React from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { BotaoFecharHeader } from '../../components/botao/Botao';
import { TELA_ADD_MEDICOS } from '../../constants/AppScreenData';

const imgComparacao = require('../../assets/img/medicos/medico1.jpeg');



export default class ListaMedicos extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });
    

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Seus médicos cadastrados</Text>

                <Container style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                    <List>
                        <ScrollView>
                            <ListItem thumbnail selected button>
                                <Left>
                                    <Thumbnail square source={imgComparacao} />
                                </Left>
                                <Body>
                                    <Text>Médico 1</Text>
                                    <Text note numberOfLines={1} style={EstilosComuns.negrito}>Especialidade</Text>
                                    <Text note numberOfLines={1}>fulano@gmail.com</Text>
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
                    onPress={() => this.props.navigation.navigate(TELA_ADD_MEDICOS.name) }>
                     <Icon name="add" />
                </Fab>                   
            </View>
        )
    };
}

