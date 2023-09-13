import { OrderInterface } from 'interfaces/order';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  quantity: number;
  price: number;
  order_id: string;
  product_id: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  product_id?: string;
}
