import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createTicket } from '../services/ticketService';

export function CreateTicket ({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enterprise, setEnterprise] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async () => {
    const ticketData = { phoneNumber, enterprise, startTime, endTime };
    await createTicket(ticketData);
    navigation.navigate('ticketList');
  };

  return (
    <View style={styles.container}>
      <Text>Phone Number</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

      <Text>Enterprise</Text>
      <TextInput value={enterprise} onChangeText={setEnterprise} />

      <Text>Start Time</Text>
      <TextInput value={startTime} onChangeText={setStartTime} />

      <Text>End Time</Text>
      <TextInput value={endTime} onChangeText={setEndTime} />

      <Button title="Save Ticket" onPress={handleSubmit} />
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

