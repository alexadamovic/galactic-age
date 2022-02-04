import { GalacticAge } from './../src/js/galactic-age.js';

describe('GalacticAge', () => {

  let myAge;
  let oldAge;

  beforeEach(() => {
    myAge = new GalacticAge(35,80);
    oldAge = new GalacticAge(100,80);
  });

  test('should create a GalacticAge class that takes an age in Earth years', () => {
    expect(myAge.earthAge).toEqual(35);
  });

  test('should convert age in Earth years to Mercury years', () => {
    expect(myAge.mercuryAge).toEqual(145);
  });

  test('should convert age in Earth years to Venus years', () => {
    expect(myAge.venusAge).toEqual(56);
  });

  test('should convert age in Earth years to Mars years', () => {
    expect(myAge.marsAge).toEqual(18);
  });

  test('should convert age in Earth years to Jupiter years', () => {
    expect(myAge.jupiterAge).toEqual(2);
  });

  test('should take life expectancy in Earth years as a property of GalacticAge object', () => {
    expect(myAge.life).toEqual(80);
  });

  test('should return the number of Mercury years a person has left to live', () => {
    expect(myAge.mercuryLeft()).toEqual(188);
  });

  test('should return the number of Venus years a person has left to live', () => {
    expect(myAge.venusLeft()).toEqual(73);
  });

  test('should return the number of Mars years a person has left to live', () => {
    expect(myAge.marsLeft()).toEqual(24);
  });

  test('should return the number of Jupiter years a person has left to live', () => {
    expect(myAge.jupiterLeft()).toEqual(4);
  });

  test('should return the number of Mercury years a person has lived past their life expectancy', () => {
    expect(oldAge.mercuryLeft()).toEqual("83 extra years. Wow!");
  });

  test('should return the number of Venus years a person has lived past their life expectancy', () => {
    expect(oldAge.venusLeft()).toEqual("32 extra years. Nice!");
  });

  test('should return the number of Mars years a person has lived past their life expectancy', () => {
    expect(oldAge.marsLeft()).toEqual("11 extra years. Sweet!");
  });

  test('should return the number of Jupiter years a person has lived past their life expectancy', () => {
    expect(oldAge.jupiterLeft()).toEqual("2 extra years. Bingbong!");
  }); 
});