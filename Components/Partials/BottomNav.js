import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function BottomNav({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <AntDesign name="filetext1" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    },
    btn: {
        color: 'black',
        textShadowColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%'
    }
});

export default BottomNav;
