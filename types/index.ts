import {StackParamList} from '../navigations/StackNavigation';

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export interface CartItem {
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string;
}
declare global {
  namespace ReactNavigation {
    export interface RootParamList extends StackParamList {}
  }
}
