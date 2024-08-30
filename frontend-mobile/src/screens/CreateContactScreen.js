import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createContact } from '../services/contactService';

export function CreateContact ({ navigation }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enterprise, setEnterprise] = useState('');

  const handleSubmit = async () => {
    const contactData = { name, phoneNumber, enterprise };
    await createContact(contactData);
    navigation.navigate('contactList');
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Phone Number</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

      <Text>Enterprise</Text>
      <TextInput value={enterprise} onChangeText={setEnterprise} />

      <Button title="Save Contact" onPress={handleSubmit} />
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
});

