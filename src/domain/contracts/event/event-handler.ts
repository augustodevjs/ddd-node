import { Event } from "..";

export interface EventHandler<T extends Event = Event> {
  handle(event: T): void;
}