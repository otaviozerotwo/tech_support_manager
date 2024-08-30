import { createStackNavigator } from '@react-navigation/stack';
import { ContactList } from '../screens/contactListScreen';
import { CreateContact } from '../screens/CreateContactScreen';

const Stack = createStackNavigator();

export default function ContactStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='ContactList' 
        component={ContactList}
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name='CreateContact' 
        component={CreateContact}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};