import { IEventHandler } from "./IEventHandler";

export interface IEventDispatcher {
  unregisterAll(): void;
  notify(event: Event): void;
  register(eventName: string, eventHandler: IEventHandler): void;
  unregister(eventName: string, eventHandler: IEventHandler): void;
}