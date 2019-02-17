import React from 'react';
import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

const WidgetMenu = ({ itemMenu }) => (
    <View style={styles.conteiner}>
        <View style={[styles.widget, EstilosComuns.circuloWidget]} onPress={()=> this.props.onClick()}>
            {/* <Text  >
                 {itemMenu.title}
            </Text>  */}                                                                                                                
        </View>
    </View>
)                                                                                                                           

const styles = StyleSheet.create({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    conteiner: {                                                                                                                        
        flex: 1,
        height: Dimensions.get('window').width /2
    },
    widget: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        backgroundColor: '#fff'
    }
  
});

export default WidgetMenu;