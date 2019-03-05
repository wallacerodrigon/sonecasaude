import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import { Icon } from "native-base";
import { TELA_PADRAO, TELA_COMANDO_VOZ } from "../../constants/AppScreenData";
import { BotaoOpacity } from '../../components/botao/Botao';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={[EstilosComuns.backgroundToolbar, styles.containerStatus]}>
            <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()} style={[ EstilosComuns.corBranca, styles.fonteStatusBar ]} />
            <Text style={[ EstilosComuns.corBranca, EstilosComuns.negrito, styles.fonteStatusBar ]}>{ TELA_PADRAO.title }</Text>
            <Icon name="mic" style={[ EstilosComuns.corBranca, styles.fonteStatusBar ]} onPress={() => this.props.navigation.navigate(TELA_COMANDO_VOZ.name)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStatus: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
       // position: 'absolute',
       // height: 50,
       // width: '100%'

    },

    fonteStatusBar: {
        fontSize: 20
    }

  

})