import { CardItem, DatePicker, Icon, Label, Radio, Thumbnail, Picker } from 'native-base';
import React from 'react';
import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ButtonGroup, Card } from 'react-native-elements';
import EstilosComuns, { BRANCO, FUNDO, FUNDO_ESCURO, VERDE } from '../../assets/estilos/estilos';
import Botao, { BotaoOpacity, BotaoExcluir } from '../../components/botao/Botao';
import { InputTexto, InputTextComMascara } from "../../components/input/InputTexto";
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';
import { TELA_PRESCRICAO, TELA_CONTROLE_MEDICACAO } from '../../constants/AppScreenData';
import { MensagemInformativa } from '../../components/mensagens/Mensagens';

const imgRemedio = require('../../assets/img/losartana.jpeg');

export default class PrescricaoMedicamento extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: TELA_PRESCRICAO.title,
        headerRight: (
            <Text style={{paddingVertical: 10, paddingHorizontal: 10, color: BRANCO, fontSize: 18, fontWeight:'bold' }} 
                onPress={() => {
                    MensagemInformativa('Medicamento salvo com sucesso');
                    navigation.navigate(TELA_CONTROLE_MEDICACAO.name);
                } }>Salvar</Text>

        )
      });
    
    constructor(props){
        super(props);

        this.state = {email: '', filtro: '', usoContinuo: true, diasSemana: ['N','S','N','N','N','N','N'], intervaloDias: '15', 
                      horarios: [{hora: '08:00', qtd: 1.0, medida: '1'}]}
        this.toggleUsoContinuo = this.toggleUsoContinuo.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    salvar(){
        MensagemInformativa('Medicamento salvo com sucesso');
        this.props.navigation.navigate(TELA_CONTROLE_MEDICACAO.name);
    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    renderComponentePeriodo(){
        let {sigla} = this.props.navigation.state.params;
     //   let indices = this.state.diasSemana.map( (dia, index) => { return dia === 'S' ? index : null }).filter(item => item != null);
        let buttons = ['2','5','7','10','15','30'];
       // let indiceIntervalo = buttons.indexOf( this.state.intervaloDias );

        if (sigla === 'D'){
            return (
                <View style={{flex: 1}}>
                    <Label  style={[EstilosComuns.corVerde]} >Dias da semana do medicamento</Label>
                    {this.renderButtonGroup(['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'], [])}
                    {this.renderRadioHorarios()}
                </View>   
            )
        } else {
            return (
                <View style={{flex: 1}}>
                    <Label style={[EstilosComuns.corVerde]}>O medicamento será tomado a cada quantos dias?</Label>
                    {this.renderButtonGroup([...buttons, (<Icon name='calendar' onPress={() => alert('abrir tela com opção de incluir um novo intervalo')} />) ], [4], false)}
                </View>   
            )
        }
    }

    updateIndex(indice){
        // let diasSemana = [...this.state.diasSemana];
        // diasSemana[indice[0]] = diasSemana[indice[0]] === 'S' ? 'N':'S';
        // this.setState({diasSemana: diasSemana});
    }

    renderButtonGroup(buttons, selectedIndexes, selectMultiple=true) {
        return <ButtonGroup
                onPress={this.updateIndex}
                selectedIndexes={selectedIndexes}
                buttons={buttons}
                selectedTextStyle={color= VERDE}
                //containerBorderRadius={6}
                selectMultiple={selectMultiple}
                
    />
    }

    renderRadioHorarios() {
        return (
            <View style={styles.containerPeriodicidade}>
                <View style={styles.radioGroup}>
                    <Text>Intervalos de horários</Text>
                    <Radio selected={true} selectedColor={VERDE}/>
                </View>

                <View style={styles.radioGroup}>
                    <Text>Horário livre</Text>
                    <Radio selected={false} selectedColor={VERDE}/>
                </View>

            </View> 
            )

    }

    tratarFiltro(text) {
        this.setState({filtro: text})
    }

    toggleUsoContinuo(){
        this.setState({usoContinuo: !this.state.usoContinuo});
    }

    onChangeDataNascimento(){

    }

    renderPeriodos(){
        return this.state.usoContinuo ? null:
          (
            <View style={{flexDirection: 'column', justifyContent: 'flex-start' }} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}} >
                    <Label style={EstilosComuns.corVerde} >Data início:</Label>
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

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}} >
                    <Label style={EstilosComuns.corVerde} >Data fim:</Label>
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
          )
    }

    adicionarHorarios(){
        let horario = {hora: '12:00', qtd: Math.random() * 5, medida: Math.round(Math.random() * 3)};
        this.setState({horarios: [...this.state.horarios, horario]});
    }

    renderRowHorarios(){
        return this.state.horarios.map( (horario, index) => {
            return (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flex: 2, marginRight: 5}}>
                            <InputTextComMascara onChangeText={() => null}
                                placeholder='Horário'
                                mascara="99:99"
                                type={InputTextComMascara.MASK_CUSTOMIZADO}
                                value={horario.hora}/>
                        </View>

                        <View style={{flex: 1, marginRight: 5}}>
                            <InputTexto onChangeInput={() => null}
                                placeholder='Qtd'
                                type={InputTexto.KEYBOARD_NUMBER}
                                value={horario.qtd}/>
                        </View>

                        <View style={{flex: 3}}>
                            <Picker selectedValue={horario.medida} onValueChange={() => null} >
                                <Picker.Item value="0" label="Medida"/>
                                <Picker.Item value="1" label="Comprimido"/>
                                <Picker.Item value="2" label="Gota(s)"/>
                                <Picker.Item value="3" label="Injeção"/>
                            </Picker>
                        </View>

                        <View style={{flex: 1}}>
                            <BotaoExcluir onPress={() => this.excluirHorario(index)}/>
                        </View>    
                   </View>
            )
        });

    }

    excluirHorario(index){
        let horarios = [...this.state.horarios];
        horarios.splice(index, 1);
        this.setState({horarios: horarios});
    }

    render() {
        let {medicamento} = this.props.navigation.state.params;
        return (
           <KeyboardAvoidingView style={[EstilosComuns.container, {paddingTop: 5, paddingBottom: 5}]} keyboardVerticalOffset={70} behavior="padding" >
           {/* <View style={[EstilosComuns.container, {paddingTop: 5, paddingBottom: 5}]}> */}
                <ScrollView style={[styles.containerMain]}>
                        <Card>
                            <CardItem cardBody style={{flexDirection: 'row', padding: 5, justifyContent: 'flex-start'}} >
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                                    <Thumbnail circular source={imgRemedio} />
                                </View>

                                <View style={{flex: 5, paddingLeft: 5}}>
                                    <Text style={EstilosComuns.negrito}>{medicamento.nomeMedicamento}</Text>
                                    <Text note numberOfLines={1} >{medicamento.principioAtivo}</Text>
                                    <Text note numberOfLines={1}>{medicamento.detalhes}</Text>
                                </View>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', padding: 3}}>
                                    {this.renderComponentePeriodo()}
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <View style={styles.containerBusca}>
                                    <View style={{flex: 9}}>
                                        <InputTexto placeholder="Pesquise por um médico" maxLength={40}
                                            onChangeInput={texto => this.tratarFiltro(texto)}
                                            autoCapitalize="none"
                                        />                    
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Icon name="search" color={BRANCO} size={25} />
                                    </View>
                                </View>


                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', padding: 3, justifyContent: 'flex-start'}}>
                                <Label style={[EstilosComuns.corVerde]}>Prazo do tratamento</Label>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.cardContinuoLeft} >Uso contínuo?</Text>
                                    <ConfirmacaoSwitch style={styles.cardContinuoRight} value={this.state.usoContinuo} toggleSwitch={this.toggleUsoContinuo}/>
                                </View>

                                {this.renderPeriodos()}
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', padding: 10}}>
                                <Label style={[EstilosComuns.corVerde, {textAlign: 'left'}]}>Horários</Label>
                                {this.renderRowHorarios()}         

                                <View style={{padding: 10}}>
                                    <Botao tituloBotao="Adicionar Horário"
                                            onClick={() => this.adicionarHorarios() }/>    
                                </View>
                                
                            </CardItem>

                        </Card>
                </ScrollView>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 9,
        flexDirection: 'column',
    },

    containerBusca: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_ESCURO
    },

    card: {
        borderColor: FUNDO,
        backgroundColor: BRANCO,
        borderBottomWidth: 1
    },

    containerPeriodicidade: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        color: VERDE
    },
    radioGroup: {
        flex: 1,
        color: VERDE

    },
    cardContinuoLeft: {
        flex: 8
    },

    cardContinuoRight: {
        flex: 2
    }

 

})