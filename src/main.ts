import { Address, Customer, Order, OrderItem } from "./domain/entity";

let customer = new Customer("123", "Augusto");
const address = new Address("Miguel aragão", 1160, "fortaleza", "60765065");

customer.changeAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Item1", 20, "p1", 2);
const item2 = new OrderItem("2", "Item2", 20, "p2", 3);

const order = new Order("1", "123", [item1, item2])