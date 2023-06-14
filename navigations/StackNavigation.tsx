import {createStackNavigator} from '@react-navigation/stack';
import Catalog from '../views/Catalog';
import Details from '../views/Details';
import {Product} from '../types';
import {NavigatorsNames} from './navigatorsNames';

export type StackParamList = {
  Catalog: undefined;
  Details: {item: Product};
};

const StackNavigation = () => {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={NavigatorsNames.Catalog}
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name={NavigatorsNames.Catalog}
        component={Catalog}
        options={{title: NavigatorsNames.Shop}}
      />
      <Stack.Screen name={NavigatorsNames.Details} component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
