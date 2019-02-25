import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardItem, Icon} from 'native-base';
import { BotaoOpacity } from '../botao/Botao';
import { FUNDO, DESMARCADO, FUNDO_ESCURO } from '../../assets/estilos/estilos';

export default class MedicacaoCardItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {medicamento} = this.props;

        return (
            <CardItem cardBody style={styles.medicacaoDia}>
                <View style={styles.medicacaoPrescricao}>
                    <Text>
                        {medicamento.nomeMedicamento}
                    </Text>
                    <Text>
                        {medicamento.prescricao}
                    </Text>
                </View>

                <View style={styles.medicacaoAcoes}>
                    <BotaoOpacity style={{color: '#f00'}} onClick={() => alert('confirmei')} >
                        <Icon name="checkmark-circle" color={FUNDO}/>
                    </BotaoOpacity>

                    <BotaoOpacity  onClick={() => alert('não tomei')}>
                        <Icon name="close-circle" color={DESMARCADO}/>
                    </BotaoOpacity>
                </View>
            </CardItem>            
        )
    }
}

const styles = StyleSheet.create({
    medicacaoHorario: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    medicacaoDia: {
        flex: 3, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_ESCURO
    },
    medicacaoPrescricao: {
        flex: 4,
        flexDirection: 'column',
        marginLeft: 25
    },
    medicacaoAcoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
})