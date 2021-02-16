import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Day(props) {
    const [color, setColor] = useState('black');

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 5,
            borderRadius: 6,
            backgroundColor: 'rgba(190, 235, 226, 0.3)',
            margin: 2,
            width: 35,
            height: 40
        }
    });

    //TEMP for teaser
    useEffect(() => {
        console.log(props.day);
        if (props.day === 23) setColor('turquoise');
    }, []);

    return (
        <TouchableOpacity style={styles.container}>
            {props.day ? <Text style={{ color: color }}>{props.day}</Text> : null}
        </TouchableOpacity>
    );
}

export default Day;
