import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchBox}>
            <TextInput
            style={styles.input}
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder='Search...'
                placeholderTextColor="#fff" 
                //allaoleva tuo search näppäimen näkyviin näppäimistöön
                returnKeyType='search' 
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    searchBox: {
        color: 'pink',
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'pink',
        borderWidth: 1,
        padding: 6,
        width: 128,
    },
    input: {
        color: 'pink',
        
    }
})
