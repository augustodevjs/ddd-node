import { IEvent, IEventDispatcher, IEventHandler } from "../contracts";

export class EventDispatcher implements IEventDispatcher {
  private eventHandlers: { [eventName: string]: IEventHandler[] } = {};

  get getEventHandlers(): { [eventName: string]: IEventHandler[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }

    this.eventHandlers[eventName].push(eventHandler);
  }

  unregisterAll(): void {
    throw new Error('Method not implemented.');
  }
  notify(event: Event): void {
    throw new Error('Method not implemented.');
  }
  unregister(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    throw new Error('Method not implemented.');
  }
}