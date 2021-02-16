import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from './Partials/Calendar';

function CalendarView() {
    return (
        <View style={styles.container}>
            <Text style={styles.prediction}>Period Starts in 8 Days</Text>
            <Text style={styles.predictionDate}>February 23</Text>
            <Calendar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: 'white'
    },
    prediction: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'AmaticSC_700Bold',
        marginTop: '5%'
    },
    predictionDate: {
        fontSize: 18,
        color: 'rgb(118, 172, 181)',
        alignSelf: 'flex-end',
        margin: '5%',
        marginRight: 0,
        fontFamily: 'OpenSans_400Regular'
    }
});

export default CalendarView;
