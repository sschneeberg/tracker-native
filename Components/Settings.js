import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Setting from './Partials/Setting';

function Settings() {
    const data = [
        {
            title: 'Tracking',
            data: ['Period', 'Symptoms', 'Sexual Activity', 'Fertile Window', 'Ovulation']
        },
        {
            title: 'Notifications',
            data: [
                'One Week Before',
                'Two Days Before',
                'One Day Before',
                'Period Start',
                'Period End',
                'Ovulation',
                'Fertile Window Start',
                'Fertile Window End'
            ]
        },
        {
            title: 'Sharing/Security',
            data: ['Allow Partner visibility', 'Enable Passcode']
        },
        {
            title: 'System Defaults',
            data: [
                'Ignore Short Cycles',
                'Set Minimum Length  >',
                'Ignore Long Cycles',
                'Set Maximum Length  >',
                'Use Default Cycle',
                'Set Default Cycle  >',
                'Use Default Period Length',
                'Set Default Period Length  >'
            ]
        }
    ];

    const List = data.map((section) => {
        const items = section.data.map((data) => {
            return <Setting key={data} value={data} />;
        });
        return (
            <>
                <Text key={section.title} style={styles.title}>
                    {section.title}
                </Text>
                {items}
            </>
        );
    });

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Welcome to Tracker </Text>
            <Text style={styles.header}>Customize to fit your tracking needs:</Text>
            {List}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'AmaticSC_700Bold',
        marginTop: '5%'
    },
    heading: {
        alignSelf: 'center',
        fontSize: 36,
        color: 'rgb(118, 172, 181)',
        fontFamily: 'AmaticSC_700Bold',
        marginTop: '5%'
    },
    header: {
        fontSize: 16,
        fontFamily: 'OpenSans_300Light_Italic',
        alignSelf: 'center'
    }
});

export default Settings;
