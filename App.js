import * as React from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DefaultScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px'
            }}>
            <Text>Universal React with Expo</Text>
            <Button title="More" onPress={() => navigation.navigate('NewPage')} />
        </View>
    );
}

function NewScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>New Page with React Navigator</Text>
            <Button title="Home" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="CRNA-Default" component={DefaultScreen} />
                <Stack.Screen name="NewPage" component={NewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
