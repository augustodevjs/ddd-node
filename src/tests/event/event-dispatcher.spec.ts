import { EventDispatcher, ProductCreatedEvent, SendEmailWhenProductIsCreatedHandler } from "../../domain";

describe('Domain events tests', () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent).toBeDefined();
    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent.length).toBe(1);
    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent[0]).toMatchObject(eventHandler);
  });

  it('should unregister an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent[0]).toMatchObject(eventHandler);

    eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent).toBeDefined();
    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent.length).toBe(0);
  })

  it("should unregister all event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent[0]).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent).toBeUndefined();
  })

  it("should notify all event handlers of an event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register('ProductCreatedEvent', eventHandler);
    expect(eventDispatcher.getEventHandlers.ProductCreatedEvent.length).toBe(1);

    const eventPayload = {
      product: {
        id: "123",
        name: "Shirt",
        price: 100,
      }
    };

    const productCreatedEvent = new ProductCreatedEvent(eventPayload);
    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
