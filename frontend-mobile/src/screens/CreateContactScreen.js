import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createContact } from '../services/contactService';

export function CreateContact ({ navigation }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enterprise, setEnterprise] = useState('');

  const handleSubmit = async () => {
    const contactData = { name, phoneNumber, enterprise };
    await createContact(contactData);
    navigation.navigate('ContactList');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Contact</Text>
      </View>

      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput value={name} onChangeText={setName} />

        <Text>Phone Number</Text>
        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

        <Text>Enterprise</Text>
        <TextInput value={enterprise} onChangeText={setEnterprise} />

        <Button title="Save Contact" onPress={handleSubmit} />
        <Button title="Back" onPress={() => navigation.navigate('ContactList')} />
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
});
