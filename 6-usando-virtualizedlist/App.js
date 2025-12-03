import { Text, View, VirtualizedList, StatusBar } from 'react-native';
import styles from './styles.js'
import React from 'react';

const DATA = [];

const getItems = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});

const getItemsCount = (data) => 100;

const Item = ({ title }) => (
  <View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.key}
      getItemCount={getItemsCount}
      getItem ={getItems}
      />
    </View>
  );
}

export default App;


