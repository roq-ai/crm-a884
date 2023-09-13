import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];

  _count?: {
    order?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: string;
}
