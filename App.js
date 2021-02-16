import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { AntDesign } from '@expo/vector-icons';

import CalendarView from './Components/CalendarView';
import Loading from './Components/Partials/Loading';
import Home from './Components/Home';

const Tab = createBottomTabNavigator();

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
    const setLoading = () => {
        setLoaded(true);
    };

    const icons = {
        Search: <AntDesign name="search1" size={24} color="#474747" />,
        Home: <AntDesign name="home" size={24} color="#474747" />,
        Calendar: <AntDesign name="calendar" size={24} color="#474747" />,
        Settings: <AntDesign name="setting" size={24} color="#474747" />
    };

    if (!fontsLoaded) {
        return null;
    } else if (fontsLoaded && !isLoaded) {
        return <Loading setLoaded={setLoading} />;
    } else {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            console.log(route.name);
                            return icons[route.name];
                        }
                    })}
                    tabBarOptions={{ activeTintColor: 'turquoise', showLabel: false }}>
                    <Tab.Screen name="Search" component={CalendarView} />
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Calendar" component={CalendarView} />
                    <Tab.Screen name="Settings" component={CalendarView} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
