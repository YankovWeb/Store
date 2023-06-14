import {createStackNavigator} from '@react-navigation/stack';
import Catalog from '../views/Catalog';
import Details from '../views/Details';
import {Product} from '../types';

export type StackParamList = {
  Catalog: undefined;
  Details: {item: Product};
};

const StackNavigation = () => {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{title: 'Shop'}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
