"use strict";

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${
        car.isOn
      }, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor(car) {
    this.maxSpeed = car.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = car.price;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;

    return (this.isOn = false);
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  }

  decelerate(value) {
    if (this.speed >= 0) {
      this.speed -= value;
    }
    return this.speed;
  }

  drive(hours) {
    if (this.turnOn) {
      this.distance = this.distance + hours * this.speed;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
