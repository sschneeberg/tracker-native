import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.prediction}>Period Starts in 18 Days</Text>
            <Text style={styles.predictionDate}>March 5</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Period Started?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ color: 'turquoise', padding: 10, marginTop: 10 }}>Notify Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 30,
        backgroundColor: 'white'
    },
    prediction: {
        fontSize: 36,
        color: 'black',
        fontFamily: 'AmaticSC_700Bold',
        marginTop: '30%'
    },
    predictionDate: {
        fontSize: 18,
        color: 'rgb(118, 172, 181)',
        alignSelf: 'flex-end',
        margin: '5%',
        marginRight: 0
    },
    btn: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: 50,
        borderRadius: 12,
        backgroundColor: 'rgb(190, 235, 226)',
        marginTop: '15%'
    },
    btnText: {
        fontFamily: 'AmaticSC_700Bold',
        fontSize: 20,
        letterSpacing: 1
    }
});

export default Home;
