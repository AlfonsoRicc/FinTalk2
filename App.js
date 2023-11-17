import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from './Home'; 
import  LogInSignUp  from './LogInSignUp'; 
import  LetsBegin  from './LetsBegin'; 
import  FieldsOfExpertise from './FieldsOfExpertise';
import  WorkHistory from './WorkHistory';
import PersonalInfo from './PersonalInfo';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
        <Stack.Screen name="LetsBegin" component={LetsBegin} />
        <Stack.Screen name="FieldsOfExpertise" component={FieldsOfExpertise} />
        <Stack.Screen name="WorkHistory" component={WorkHistory} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
