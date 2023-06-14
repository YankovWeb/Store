import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from '../components/Icon';
import Home from '../views/Home';
import Cart from '../views/Cart';
import StackNavigation from './StackNavigation';
import {selectCartTotalQuantity} from '../features/cart/cartSlice';
import {useAppSelector} from '../store/store';
import {NavigatorsNames} from './navigatorsNames';

const Navigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={NavigatorsNames.Home}
        shifting={false}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName: string = '';
            if (route.name === NavigatorsNames.Home) {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === NavigatorsNames.Shop) {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === NavigatorsNames.Cart) {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            }

            return <Icon name={iconName} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen name={NavigatorsNames.Home} component={Home} />
        <Tab.Screen name={NavigatorsNames.Shop} component={StackNavigation} />
        <Tab.Screen
          name={NavigatorsNames.Cart}
          component={Cart}
          options={{tabBarBadge: totalQuantity}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
