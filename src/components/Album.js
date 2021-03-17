import {Text, View} from "react-native";
import React from 'react';

export default function Album({title}){
    return <View style={{backgroundColor: '#ffaaaa', margin:5, padding: 10}}>
        <Text>{title}</Text>
    </View>
}

