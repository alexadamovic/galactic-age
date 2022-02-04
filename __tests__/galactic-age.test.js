import { GalacticAge } from './../src/js/galactic-age.js'

describe('GalacticAge', () => {

  test('should create a GalacticAge class that takes an age in Earth years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.earthAge).toEqual(35);
  });

  test('should convert age in Earth years to Mercury years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.mercuryAge).toEqual(145);
  });

  test('should convert age in Earth years to Venus years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.venusAge).toEqual(56);
  });

  test('should convert age in Earth years to Mars years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.marsAge).toEqual(18);
  });

  test('should convert age in Earth years to Jupiter years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.jupiterAge).toEqual(2);
  });

  test('should take life expectancy in Earth years as a property of GalacticAge object', () => {
    let myAge = new GalacticAge(35, 80);
    expect(myAge.life).toEqual(80);
  });

  test('should return the number of Mercury years a person has left to live', () => {
    let myAge = new GalacticAge(35, 80);
    expect(myAge.mercuryLeft()).toEqual(188);
  });

  test('should return the number of Venus years a person has left to live', () => {
    let myAge = new GalacticAge(35, 80);
    expect(myAge.venusLeft()).toEqual(73);
  });

  test('should return the number of Mars years a person has left to live', () => {
    let myAge = new GalacticAge(35, 80);
    expect(myAge.marsLeft()).toEqual(24);
  });

  test('should return the number of Jupiter years a person has left to live', () => {
    let myAge = new GalacticAge(35, 80);
    expect(myAge.jupiterLeft()).toEqual(4);
  });

  test('should return the number of Mercury years a person has lived past their life expectancy', () => {
    let myAge = new GalacticAge(100, 80);
    expect(myAge.mercuryLeft()).toEqual("83 extra years. Wow!");
  });
  
});