import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Day from './Day';

function Calendar() {
    const days = [];
    for (let i = 0; i < 29; i++) {
        days.push(<Day key={`key ${i}`} day={i} style={{ fontFamily: 'OpenSans_400Regular' }} />);
    }
    return <View style={styles.container}>{days}</View>;
}

const styles = StyleSheet.create({
    container: {
        height: '50%',
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 4
    }
});

export default Calendar;
