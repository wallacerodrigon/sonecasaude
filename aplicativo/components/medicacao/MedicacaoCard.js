import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Icon} from 'native-base';
import { FUNDO, DESMARCADO } from '../../assets/estilos/estilos';
import { BotaoOpacity } from '../botao/Botao';
import MedicacaoCardItem from './MedicacaoCardItem';

export default class MedicacaoCard extends React.Component {

    constructor(props){
        super(props);
    }

    montarCardItens(item){
       return item.medicamentos.map(item => {
           return (
               <MedicacaoCardItem medicamento={item}/>
           )
       })
    }

    render() {
        const {item} = this.props;

        return (

            <Card>
                <CardItem header >
                     <Text style={styles.medicacaoHorario}>
                         {item.hora}
                     </Text>
                 </CardItem>            

                 {this.montarCardItens(item)}
            </Card>

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
        justifyContent: 'space-around'
    },
    medicacaoPrescricao: {
        flex: 4,
        flexDirection: 'column',
        marginLeft: 20
    },
    medicacaoAcoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
})