import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getContacts } from '../services/contactService';

export function ContactList ({ navigation }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();

      // console.log(data);

      if (data) {
        setContacts(data);
      }
    };

    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text>{item.enterprise}</Text>
          </View>
        )}
      />

      <Button title="Add Contact" onPress={() => navigation.navigate('createContact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contact: {
    marginTop: 44
  }
});

