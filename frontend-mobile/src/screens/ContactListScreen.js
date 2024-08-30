import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getContacts } from '../services/contactService';

export function ContactList ({ navigation }) {
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.contact}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Phone Number: {item.phoneNumber}</Text>
              <Text style={styles.text}>Enterprise: {item.enterprise}</Text>
            </View>
          )}
        />
        <Button title="Add Contact" onPress={() => navigation.navigate('CreateContact')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392DE9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 24
  },
  contact: {
    backgroundColor: '#0E0E0E',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
  },
  text: {
    color: '#FFF'
  }
});

