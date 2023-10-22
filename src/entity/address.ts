// Value Object

export class Address {
  private zip: string;
  private city: string;
  private street: string;
  private number: number;

  constructor(street: string, number: number, city: string, zip: string) {
    this.zip = zip;
    this.city = city;
    this.street = street;
    this.number = number;

    this.validate();
  }

  validate() {
    if (!this.street) {
      throw new Error("Street is required")
    }

    if (!this.number) {
      throw new Error("Number is required")
    }

    if (!this.city) {
      throw new Error("city is required")
    }

    if (!this.zip) {
      throw new Error("zip is required")
    }
  }

  toString() {
    return `${this.zip} ${this.city} ${this.street} ${this.number}`
  }
}