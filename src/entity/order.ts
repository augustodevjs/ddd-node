import { OrderItem } from "./order-item";

export class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._items = items;
    this._customerId = customerId;
    this._total = this.total();
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }

    if (this._customerId.length === 0) {
      throw new Error("CustomerId is required");
    }

    if (this._items.length === 0) {
      throw new Error("Order must have at least one item");
    }
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item._price, 0);
  }
}

