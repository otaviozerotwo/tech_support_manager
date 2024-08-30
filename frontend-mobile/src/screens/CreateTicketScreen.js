import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createTicket } from '../services/ticketService';
import { SafeAreaView } from 'react-native-safe-area-context';

export function CreateTicket ({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enterprise, setEnterprise] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async () => {
    const ticketData = { phoneNumber, enterprise, startTime, endTime };
    await createTicket(ticketData);
    navigation.navigate('TicketList');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Ticket</Text>
      </View>

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
        <Button title="Back" onPress={() => navigation.navigate('TicketList')} />
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

