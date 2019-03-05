import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Icon, Container} from 'native-base';
import EstilosComuns, { FUNDO, DESMARCADO } from '../../assets/estilos/estilos';
import { BotaoOpacity } from '../botao/Botao';
import MedicacaoCardItem from './MedicacaoCardItem';
import MedicacaoCardItemUso from './MedicacaoCardItemUso';

export default class MedicacaoCard extends React.Component {

    constructor(props){
        super(props);
    }

    escolheCardItem(item){
        console.log('escolhendo card item: ', item.horaUsoEfetivo)
    }

    montarCardItens(item, telaUso){
       return item.medicamentos.map(item => {
            if (telaUso){
                return <MedicacaoCardItemUso medicamento={item}/>
            } else {
                return <MedicacaoCardItem medicamento={item}/>
            }   
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

                    {this.montarCardItens(item, item.telaUso)}
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