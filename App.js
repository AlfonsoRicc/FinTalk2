import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'; 
import LogInSignUp from './LogInSignUp'; 
import LetsBegin from './LetsBegin'; 
import FieldsOfExpertise from './FieldsOfExpertise';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
        <Stack.Screen name="LetsBegin" component={LetsBegin} />
        <Stack.Screen name="FieldsOfExpertise" component={FieldsOfExpertise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
