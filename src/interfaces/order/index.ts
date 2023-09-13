import { OrderItemInterface } from 'interfaces/order-item';
import { CustomerInterface } from 'interfaces/customer';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_date?: any;
  total_price: number;
  status: string;
  customer_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  customer?: CustomerInterface;
  organization?: OrganizationInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  organization_id?: string;
}
