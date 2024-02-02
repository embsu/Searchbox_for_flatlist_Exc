import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Row({person}) { // otetaan person propsina eli props on object, joka sisältää person-nimisen propertyn
    
  return (
    <Text style={styles.listanimet}>{person.firstname + ', ' + person.lastname}</Text>
  )
}

const styles = StyleSheet.create({
    listanimet: {
        fontSize: 16,
        color: 'pink',
    }
})
