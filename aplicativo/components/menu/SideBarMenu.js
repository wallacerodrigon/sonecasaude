import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {List, ListItem, Thumbnail } from "native-base";
import EstilosComuns, { FUNDO_ESCURO, VERDE } from "../../assets/estilos/estilos";
import { TELA_CONTROLE_MEDICACAO, TELA_LOGIN, TELA_SHARE_INFO, TELA_LISTA_MEDICOS, TELA_ENDERECO, TELA_ALARME } from "../../constants/AppScreenData";
import { Rating } from "react-native-ratings";

const routes = [
    {label: 'Controle de medicação', rota: TELA_CONTROLE_MEDICACAO.name},
    {label: 'Médicos', rota: TELA_LISTA_MEDICOS.name},
    {label: 'Compartilhar informações', rota: TELA_SHARE_INFO.name},
    {label: 'Endereços', rota: TELA_ENDERECO.name},
    {label: 'Configurações', rota: TELA_LOGIN.name},
    {label: 'Sair do aplicativo', rota: TELA_LOGIN.name},
    {label: 'Exemplos de alarme', rota: TELA_ALARME.name},
    
];

export default class SideBarMenu extends React.Component {
  render() {
    return (
      <View style={EstilosComuns.container}>
          <View style={[EstilosComuns.backgroundToolbar, styles.containerProfile]} >
            <View style={styles.perfil}>
                <Thumbnail  circular
                    source={
                        require('../../assets/perfil/foto-teste.jpeg')
                    }
                />
            </View>

            <View style={styles.perfil}>
                <Text style={[EstilosComuns.corBranca, EstilosComuns.negrito, {fontSize: 20}]}>Nome do Usuário</Text>

                <View style={styles.ratingPerfil}>
                    <Text style={EstilosComuns.corBranca}>4.7</Text>
                    <Rating
                            imageSize={20}
                            readonly
                            minValue={0}
                            fractions={1}
                            startingValue={"3.7"}
                            style={{ color: 'yellow', backgroundColor: '#ddd' }}
                            />
                </View>
                
            </View>
          </View>
     
          <View style={[styles.containerRotas, EstilosComuns.backgroundPadrao]}>
            <List
                dataArray={routes}
                renderRow={data => {
                    return (
                        <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.rota)}>
                            <Text style={styles.labelRotaDestaque}>{data.label}</Text>
                        </ListItem>
                    );
                }}
                />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start'
    },

    containerRotas: {
        flex: 8
    },

    labelRotaDestaque: {
        color: FUNDO_ESCURO,
        fontWeight: 'bold',
        fontSize: 20,
    },    

    perfil: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },

    ratingPerfil: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 15,
        marginRight: 10

    }

})