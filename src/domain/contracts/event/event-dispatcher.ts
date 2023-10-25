import { Event, EventHandler } from "..";

export interface EventDispatcher {
  unregisterAll(): void;
  notify(event: Event): void;
  register(eventName: string, eventHandler: EventHandler): void;
  unregister(eventName: string, eventHandler: EventHandler): void;
}