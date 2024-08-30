import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreateContact } from './screens/CreateContactScreen';
import { ContactList } from './screens/contactListScreen';
import { CreateTicket } from './screens/CreateTicketScreen';
import { TicketList } from './screens/TicketListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name='ticketList'
        component={TicketList}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarIcon: ({ focused, size, color }) => {
          //   if (focused) {
          //     return <Ionicons size={size} color={color} name='' />
          //   }

          //   return <Ionicons size={size} color={color} name='' />
          // }
        }}
      />
      <Tab.Screen
        name='createTicket'
        component={CreateTicket}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarIcon: ({ focused, size, color }) => {
          //   if (focused) {
          //     return <Ionicons size={size} color={color} name='' />
          //   }

          //   return <Ionicons size={size} color={color} name='' />
          // }
        }}
      />
      <Tab.Screen
        name='createContact'
        component={CreateContact}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarIcon: ({ focused, size, color }) => {
          //   if (focused) {
          //     return <Ionicons size={size} color={color} name='' />
          //   }

          //   return <Ionicons size={size} color={color} name='' />
          // }
        }}
      />
      <Tab.Screen
        name='contactList'
        component={ContactList}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarIcon: ({ focused, size, color }) => {
          //   if (focused) {
          //     return <Ionicons size={size} color={color} name='' />
          //   }

          //   return <Ionicons size={size} color={color} name='' />
          // }
        }}
      />
    </Tab.Navigator>
  )
};