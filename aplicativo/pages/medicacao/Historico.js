import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_HISTORICO_MEDICACAO } from '../../constants/AppScreenData';
import {DatePicker, Segment, Button } from 'native-base';
import { Dimensions } from 'react-native'
import {
    LineChart,
//    PieChart,
  } from 'react-native-chart-kit'
import { Rating, AirbnbRating } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Historico extends React.Component {



    static navigationOptions = {
        title: TELA_HISTORICO_MEDICACAO.title,
      };

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }      

    getGraficoDados(){
    }
    
    render() {
        const data = {
            labels: ['01', '02', '03', '04', '05', '06'],
            datasets: [{
              data: [ 1, 0, 1, 1, 1, 0 ],
    //              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
              strokeWidth: 2 // optional
            }]
          }        
        
        const chartConfig = {
            backgroundGradientFrom: '#666',
            backgroundGradientTo: '#666',
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            strokeWidth: 2 // optional, default 3
          }
        //   <Thumbnail square small source={{uri: uri}} /> 
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Histórico</Text>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#fff'}}>
                    <Text>Período:</Text>
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Data início"
                            textStyle={{ color: "#fff" }}
                            placeHolderTextStyle={{ color: "#fff" }}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            style={[EstilosComuns.inputText]} 
                            />                
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Data fim"
                            textStyle={{ color: "#fff" }}
                            placeHolderTextStyle={{ color: "#fff" }}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            style={[EstilosComuns.inputText]} 
                            />                
                </View>

                <View style={{flex: 1}}>
                    <Text>Medicamento:</Text>
                </View>

                <View style={{flex: 1}}>
                    <Text>Medicamento:</Text>                
                </View>


                <View style={{flex: 3}}>
                    <Segment>
                        <Button first><Text>Seg</Text></Button>
                        <Button last><Text>TER</Text></Button>
                        <Button first><Text>QUA</Text></Button>
                        <Button last><Text>QUI</Text></Button>
                        <Button first><Text>SEX</Text></Button>
                        <Button last><Text>SAB</Text></Button>
                        <Button first><Text>DOM</Text></Button>
                    </Segment>

                    <Rating
                        imageSize={10}
                        readonly
                        startingValue={3}
                        style={{ color: 'yellow' }}
                        />

                    <Text>Losartana</Text>
                    <LineChart
                        data={data}
                        width={SCREEN_WIDTH}
                        height={150}
                        chartConfig={chartConfig}
                        />                
                </View>

            </View>
        )
    };
} 

