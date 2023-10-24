// Entidade anêmica tem um id único, atributos e tem getters e setters.
// Um entidade por padrão tem que se autovalidar.

import { Address } from "./address";

export class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardsPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name;
  }

  get rewardsPoints(): number {
    return this._rewardsPoints;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  isActive(): boolean {
    return this._active
  }

  addAddress(address: Address) {
    this._address = address;
  }

  activate() {
    if (!this._address) {
      throw new Error("Address is mandatory to activate a customer")
    }

    this._active = true;
  }

  desactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardsPoints += points;
  }
}