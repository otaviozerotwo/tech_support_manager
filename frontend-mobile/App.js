import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactList from './src/screens/ContactListScreen';
import CreateContact from './src/screens/CreateContactScreen';
import TicketList from './src/screens/TicketListScreen';
import CreateTicket from './src/screens/CreateTicketScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} options={{ title: 'Contacts' }} />
        <Stack.Screen name="CreateContact" component={CreateContact} options={{ title: 'Create Contact' }} />
        <Stack.Screen name="TicketList" component={TicketList} options={{ title: 'Tickets' }} />
        <Stack.Screen name="CreateTicket" component={CreateTicket} options={{ title: 'Create Ticket' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
