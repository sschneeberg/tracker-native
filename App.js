import React, { useState } from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    useFonts,
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic
} from '@expo-google-fonts/open-sans';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import Home from './Components/Home';
import BottomNav from './Components/Partials/BottomNav';
import Loading from './Components/Partials/Loading';

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        AmaticSC_400Regular,
        AmaticSC_700Bold,
        OpenSans_300Light,
        OpenSans_300Light_Italic,
        OpenSans_400Regular,
        OpenSans_400Regular_Italic,
        OpenSans_600SemiBold,
        OpenSans_600SemiBold_Italic,
        OpenSans_700Bold,
        OpenSans_700Bold_Italic,
        OpenSans_800ExtraBold,
        OpenSans_800ExtraBold_Italic
    });

    const [isLoaded, setLoaded] = useState(false);
    if (!fontsLoaded) {
        return null;
    } else if (fontsLoaded && !isLoaded) {
        return (
            <Loading
                setLoaded={() => {
                    setLoaded(true);
                }}
            />
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
                <BottomNav />
            </NavigationContainer>
        );
    }
}
