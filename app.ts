import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (item.length > 0) {
      setShoppingList([...shoppingList, { id: Math.random().toString(), value: item }]);
      setItem('');
    }
  };

  const removeItem = (id) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicionar item"
          style={styles.input}
          onChangeText={setItem}
          value={item}
        />
        <Button title="Adicionar" onPress={addItem} />
      </View>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.value}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 5,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default App;