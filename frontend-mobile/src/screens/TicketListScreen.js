import { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getTickets } from '../services/ticketService';

export function TicketList ({ navigation }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getTickets();

      // console.log('log tela:', data);
      
      if (data) {
        setTickets(data);
      }
    };
    fetchTickets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.ticket}>
            <Text>Ticket ID: {item._id}</Text>
            {/* <Text>Contact Name: {item.contact.name}</Text> */}
            {/* <Text>Phone Number: {item.contact.phoneNumber}</Text> */}
            {/* <Text>Enterprise: {item.contact.enterprise}</Text> */}
            <Text>Start Time: {item.callStartTime}</Text>
            <Text>End Time: {item.callEndTime}</Text>
          </View>
        )}
      />
      <Button title="Add Ticket" onPress={() => navigation.navigate('createTicket')} />
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
  ticket: {
    marginTop: 44,
    marginBottom: 14
  }
});
