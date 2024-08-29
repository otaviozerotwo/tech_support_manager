import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createTicket } from '../services/ticketService';

const CreateTicket = ({ navigation }) => {
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
    <View>
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

export default CreateTicket;
