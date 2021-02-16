import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, Button } from 'react-native';

const Loading = (props) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        }, 3500);
        setTimeout(() => props.setLoaded(), 4000);
    };

    useEffect(fadeIn, [fadeAnim]);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.View
                    style={[
                        styles.fadingContainer,
                        {
                            opacity: fadeAnim
                        }
                    ]}></Animated.View>
                <Text style={styles.fadingText}>tracker</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },
    innerContainer: {
        maxHeight: 200,
        minHeight: 200,
        width: '45%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        transform: [{ rotate: '30deg' }],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        shadowColor: '#e2e2e2',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden'
    },
    fadingContainer: {
        backgroundColor: 'rgb(190, 235, 226)',
        height: 300,
        width: 300,
        position: 'absolute'
    },
    fadingText: {
        fontSize: 36,
        color: 'white',
        fontFamily: 'AmaticSC_700Bold',
        transform: [{ rotate: '-30deg' }]
    }
});

export default Loading;
