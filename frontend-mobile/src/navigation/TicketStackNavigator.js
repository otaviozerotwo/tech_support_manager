import { createStackNavigator } from '@react-navigation/stack';
import { TicketList } from '../screens/TicketListScreen';
import { CreateTicket } from '../screens/CreateTicketScreen';

const Stack = createStackNavigator();

export default function TicketStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='TicketList' 
        component={TicketList}
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name='CreateTicket' 
        component={CreateTicket}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};