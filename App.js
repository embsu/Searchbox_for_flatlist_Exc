import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Search from './components/Search';
import Row from './components/Row';
import React, { useState, useEffect } from 'react';


export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  //eli haetaan sukunimen perusteella, voi käyttää myös pientä kirjainta hakemiseen vaikka sukunimi alkaa isolla kirjaimella taulukossa
  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.toLowerCase().startsWith(search.toLowerCase())); 
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
      data={items}
      renderItem={({ item }) => (
        <Row person={item} />
      )}
      ></FlatList>
      </SafeAreaView>
  );

      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
