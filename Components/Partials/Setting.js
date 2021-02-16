import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Setting(props) {
    const [fill, setFill] = useState('whitesmoke');

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 3,
            borderRadius: 6,
            backgroundColor: 'rgba(190, 235, 226, 0.3)',
            margin: 2
        },
        option: {
            fontSize: 15,
            color: '#474747',
            margin: 10,
            fontFamily: 'OpenSans_400Regular'
        },
        btn: {
            backgroundColor: fill,
            height: 20,
            width: 20,
            borderWidth: 1,
            borderRadius: 3,
            borderStyle: 'solid',
            borderColor: '#c2c2c2',
            marginLeft: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => setFill('turquoise')}>
                <AntDesign name="check" size={16} color="whitesmoke" />
            </TouchableOpacity>
            <Text style={styles.option}>{props.value}</Text>
        </View>
    );
}

export default Setting;
