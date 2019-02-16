import React from 'react';
import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';

const WidgetMenu = ({ itemMenu }) => (
    <View style={styles.conteiner}>
        <View style={[styles.widget, styles.circle]} >
            <Text  >
                 {itemMenu.title}
            </Text> 
        </View>
    </View>
) 

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: Dimensions.get('window').width /2,
    },
    widget: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    widgetText: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    widgetIcone: {
        width: "100%", 
    },
    circle: {
        // borderWidth: 1,
        // borderColor: '#666'
    }    
});

export default WidgetMenu;