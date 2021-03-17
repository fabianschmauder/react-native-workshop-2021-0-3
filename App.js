import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlbumScreen from "./src/screens/AlbumsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Albums" component={AlbumScreen}/>
                        <Tab.Screen name="Settings" component={SettingsScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>);
}
