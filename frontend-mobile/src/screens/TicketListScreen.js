import { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getTickets } from '../services/ticketService';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Tickets</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={tickets}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.ticket}>
              <Text style={styles.text}>Ticket ID: {item._id}</Text>
              {/* <Text>Contact Name: {item.contact.name}</Text> */}
              {/* <Text>Phone Number: {item.contact.phoneNumber}</Text> */}
              {/* <Text>Enterprise: {item.contact.enterprise}</Text> */}
              <Text style={styles.text}>Start Time: {item.callStartTime}</Text>
              <Text style={styles.text}>End Time: {item.callEndTime}</Text>
            </View>
          )}
        />
        <Button title="Add Ticket" onPress={() => navigation.navigate('CreateTicket')} />
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
  ticket: {
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
