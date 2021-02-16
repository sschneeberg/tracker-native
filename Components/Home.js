import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.prediction}>Period Starts in 21 Days</Text>
            <Text style={styles.predictionDate}>March 5</Text>
            <Text style={styles.placeholder}>Placeholder for some sort of tracking guage</Text>
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
        padding: '10%'
    },
    prediction: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'AmaticSC_700Bold',
        marginTop: '5%'
    },
    predictionDate: {
        alignSelf: 'flex-end',
        margin: '5%'
    },
    placeholder: {
        height: '40%',
        width: '60%',
        alignSelf: 'center',
        marginTop: '20%',
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 50,
        textAlign: 'center',
        padding: '10%',
        paddingTop: '20%'
    }
});

export default Home;
