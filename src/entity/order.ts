import { OrderItem } from "./order-item";

export class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[];
  _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._items = items;
    this._customerId = customerId;
    this._total = this.total();
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item._price, 0);
  }
}

