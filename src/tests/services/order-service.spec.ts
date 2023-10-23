import { Order, OrderItem } from "../../entity"
import { OrderService } from "../../services";

describe("Order Service Unit Test", () => {
  it("Should get total of orders", () => {
    const item1 = new OrderItem("1", "order1", 100, "1", 1,);
    const item2 = new OrderItem("2", "order2", 200, "2", 2,);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("1", "1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  })
})