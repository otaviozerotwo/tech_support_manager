import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TicketStackNavigator from './TicketStackNavigator';
import ContactStackNavigator from './ContactStackNavigator';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TicketListTab'
        component={TicketStackNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name='list' />
            }

            return <Ionicons size={size} color={color} name='list-outline' />
          }
        }}
      />
      
      <Tab.Screen
        name='ContactListTab'
        component={ContactStackNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name='call' />
            }

            return <Ionicons size={size} color={color} name='call-outline' />
          }
        }}
      />
    </Tab.Navigator>
  );
};