import { Card, CardItem, DatePicker, Fab, Icon, Picker, Thumbnail } from 'native-base';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Rating } from 'react-native-elements';
import EstilosComuns, { BRANCO, COLOR_RATING, FUNDO, PRETO, VERDE } from '../../assets/estilos/estilos';
import { TELA_ADD_SHARE_MEDICACAO, TELA_ESTATISTICA_MEDICACAO } from '../../constants/AppScreenData';

const SCREEN_WIDTH = Dimensions.get('window').width;
const imgRemedio = require('../../assets/img/alerta/losartana.jpeg');

export default class EstatisticaHistoricoUso extends React.Component {



    static navigationOptions = {
        title: TELA_ESTATISTICA_MEDICACAO.title,
      };

    constructor(props){
        super(props);
        
    }

    getResultado(){
        return [
            {id:1, medicamento: {nomeMedicamento: 'Puran T4', foto: {}, prescricao: '01 comprimido', pontualidade: 7.3, usoDiario: 6.6, diasUso: [0,0,1,0,1], labelDiasUso: ["1","2","3", "4", "5"]}},
            {id:2, medicamento: {nomeMedicamento: 'Puran T5', foto: {}, prescricao: '01 comprimido', pontualidade: 5.3, usoDiario: 3.3, diasUso: [0,0,1,0,0], labelDiasUso: ["1", "2", "3","4","5"]}},
            {id:3, medicamento: {nomeMedicamento: 'Puran T6', foto: {}, prescricao: '01 comprimido', pontualidade: 6.9, usoDiario: 2.5, diasUso: [0,1,0,1,0], labelDiasUso: ["1", "2", "3", "4","5"]}},
        ];

    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }      

    getGraficoDados(){
    }
    
    render() {

        const chartConfig = {
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => "#000",
            strokeWidth: 2 // optional, default 3
          }

        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Histórico</Text>

                <View style={styles.containerFiltro}>
                        <View style={styles.containerLinhaFiltro}>
                            <View style={styles.blocoLabel}>
                                <Text>Período:</Text>
                            </View>

                            <View style={styles.blocoComponenteFiltro}>
                                <DatePicker
                                    defaultDate={new Date()}
                                    minimumDate={new Date(1900, 1, 1)}
                                    locale={"pt-BR"} //ver em portugues
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    onDateChange={this.onChangeDataNascimento}
                                    disabled={false}
                                    textStyle={{ color: VERDE, borderWidth: 1, borderColor: FUNDO }}
                                    />        
                                <Text>
                                    até 
                                </Text>           
                                <DatePicker
                                    defaultDate={new Date()}
                                    minimumDate={new Date(1900, 1, 1)}
                                    locale={"pt-BR"} //ver em portugues
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    onDateChange={this.onChangeDataNascimento}
                                    disabled={false}
                                    textStyle={{ color: VERDE, borderWidth: 1, borderColor: FUNDO }}
                                    />                                             
                                </View>
                        </View>

                        <View style={styles.containerLinhaFiltro}>
                            <View style={[styles.blocoLabel, {flex: 2}]}>
                                <Text>Medicamento:</Text>
                            </View>

                            <View style={styles.blocoComponenteFiltro}>
                                <Picker>
                                    <Picker.Item label="Todos" value="0" />
                                    <Picker.Item label="Losartana" value="1" />
                                    <Picker.Item label="Dipirona" value="2" />
                                </Picker>

                            </View>
                        </View>

                        <View style={styles.containerLinhaFiltro}>
                            <View style={styles.blocoLabel}>
                                <Text>Médico:</Text>
                            </View>

                            <View style={styles.blocoComponenteFiltro}>
                                <Picker>
                                    <Picker.Item label="Todos" value="0" />
                                    <Picker.Item label="José Pedro" value="1" />
                                    <Picker.Item label="Maria José" value="2" />
                                </Picker>
                            </View>                    
                        </View>
                        <View style={styles.containerLinhaFiltro}>
                            {/* <Botao onClick={() => alert('pesquisando...')} tituloBotao="Pesquisar" /> */}
                        </View>
                        {/* //this.props.navigation.openDrawer();
                        //this.props.navigation.closeDrawer(); */}
                </View>

                <View style={styles.containerResultado}>
                    <FlatList
                        data= {this.getResultado()}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {

                    

                            return (
                                <View style={EstilosComuns.backgroundPadrao}>
                                    <Card style={[styles.cardItem]}>
                                        <CardItem header style={styles.cardItemMedicamento} >
                                            <View style={{flexDirection:'row'}} >
                                                <Thumbnail circular small source={imgRemedio}/>

                                                <View style={{flexDirection: 'column', justifyContent: 'space-between', padding: 3}} >
                                                    <Text style={EstilosComuns.negrito} >{item.medicamento.nomeMedicamento}</Text>
                                                    <Text>{item.medicamento.prescricao}</Text>
                                                </View>
                                            </View>

                                            <View>
                                                <View style={styles.ratings}>
                                                    <Text>Pontualidade: </Text>
                                                    <Rating
                                                        imageSize={10}
                                                        readonly
                                                        minValue={0}
                                                        fractions={1}
                                                        startingValue={item.medicamento.pontualidade}
                                                        ratingBackgroundColor= {FUNDO}
                                                        ratingColor= {COLOR_RATING}
                                                        />

                                                </View>

                                                <View style={styles.ratings}>
                                                    <Text>Uso diário: </Text>
                                                    <Rating
                                                        imageSize={10}
                                                        readonly
                                                        minValue={0}
                                                        fractions={1}
                                                        startingValue={item.medicamento.usoDiario}
                                                        style={{ backgroundColor: 'yellow' }}
                                                        />

                                                </View>

                                            </View>

                                        </CardItem>

                                        <CardItem cardBody style={styles.cardItemGrafico}>
                                            <LineChart
                                                data={{
                                                    labels: ["1", "2", "3", "4", "5"],
                                                    datasets: [{
                                                        data: item.medicamento.diasUso,
                                                    }]
                                                }}
                                                width={SCREEN_WIDTH}
                                                height={100}
                                                chartConfig={chartConfig}
                                                withDots={false}
                                                strokeWidth={3}
                                                withShadow={false}
                                                withInnerLines={false}
                                                bezier
                                                />                
                                           
                                        </CardItem>
                                    </Card>
                                </View>
                            )
                        }}
                        >
                    </FlatList>
                </View>
                {/* {id:1, medicamento: {nomeMedicamento: 'Puran T4', foto: {}, prescricao: '01 comprimido', pontualidade: 7.3, usoDiario: 5.9}}, */}
                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_ADD_SHARE_MEDICACAO.name) }>
                     <Icon name="share" />
                </Fab>                   

            </View>
        )
    };
} 

const styles= StyleSheet.create({
   containerFiltro: {
       flex: 2,
       borderBottomWidth: 1,
       borderBottomColor: BRANCO,
       flexDirection: 'column',
       backgroundColor: FUNDO
   },

   containerResultado: {
       flex: 8,
       flexDirection: 'column',
       borderBottomWidth: 1,
       borderBottomColor: BRANCO,
   },

   containerLinhaFiltro: {
       flex: 1, 
       flexDirection: 'row',
       justifyContent: 'space-between',
       padding: 5
   },

   campoData:{
        color: PRETO,
        backgroundColor: BRANCO
   },

   blocoLabel: {
       flex: 1, 
       padding: 3, 
       justifyContent: 'center'
    },

    blocoComponenteFiltro: {
        flex: 4, padding: 3, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
    },
    
    cardItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        //padding: 3,
        
    },

    cardItemMedicamento: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4
    },

    cardItemGrafico: {
        flex: 3,
        backgroundColor: BRANCO
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})