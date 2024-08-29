import { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getTickets } from '../services/ticketService';

const TicketList = ({ navigation }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getTickets();
      if (data) {
        setTickets(data);
      }
    };
    fetchTickets();
  }, []);

  return (
    <View>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text>{item.enterprise}</Text>
            <Text>{item.startTime}</Text>
            <Text>{item.endTime}</Text>
          </View>
        )}
      />
      <Button title="Add Ticket" onPress={() => navigation.navigate('CreateTicket')} />
    </View>
  );
};

export default TicketList;
