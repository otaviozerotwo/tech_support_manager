import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getContacts } from '../services/contactService';

const ContactList = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();

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

      <Button title="Add Contact" onPress={() => navigation.navigate('CreateContact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 44,
    marginLeft: 14,
    marginBottom: 14
  },
  contact: {
    marginBottom: 14
  }
});

export default ContactList;