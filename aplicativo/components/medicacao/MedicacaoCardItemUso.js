import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardItem, Icon} from 'native-base';
import { BotaoOpacity } from '../botao/Botao';
import EstilosComuns, { FUNDO, DESMARCADO, FUNDO_ESCURO, MARCADO } from '../../assets/estilos/estilos';
import MedicacaoCardItem from './MedicacaoCardItem';

export default class MedicacaoCardItemUso extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {medicamento} = this.props;

        return (
            <CardItem cardBody style={styles.medicacaoDia}>
                <View style={[styles.medicacaoPrescricao ]}>
                    <Text>
                        {medicamento.nomeMedicamento}
                    </Text>
                    <Text>
                        {medicamento.prescricao}
                    </Text>
                    <Text style={[EstilosComuns.negrito, medicamento.confirmado ? styles.medicacaoConfirmada: styles.medicacaoNaoConfirmada ]}>
                        {medicamento.confirmado ? 'Tomei' : 'Não tomei'}
                        {medicamento.confirmado ? ' às ' + medicamento.horaUsoEfetivo : ''}
                    </Text>
                </View>

                <View style={styles.medicacaoSimbolo}>
                    <Icon name={medicamento.confirmado? "checkmark-circle":"close-circle"} 
                          style={{color: medicamento.confirmado ? MARCADO: DESMARCADO }}/>
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
    },
    medicacaoPrescricao: {
        flex: 4,
        flexDirection: 'column',
        marginLeft: 25
    },
    medicacaoSimbolo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    medicacaoConfirmada: {
        color: MARCADO
    }, 
    medicacaoNaoConfirmada: {
        color: DESMARCADO
    },
 
})