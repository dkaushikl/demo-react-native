import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function MyApp() {
    const [name, onChangeText] = React.useState('Enter name....');

    return (
        <View>
            <TextInput underlineColorAndroid="transparent" placeholder="Name" placeholderTextColor="#9a73ef" autoCapitalize="none" style={{ height: 40, borderColor: 'black', width: '80%', borderWidth: 1, marginTop: '20px' }} onChangeText={(name) => onChangeText(name)}
                value={name}></TextInput>
        </View>
    );
}