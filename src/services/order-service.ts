import { Order } from "../entity";

export class OrderService {
  static total(items: Order[]): number {
    return items.reduce((acc, order) => acc + order.total(), 0)
  }
} 