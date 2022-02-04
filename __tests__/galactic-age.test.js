import { GalacticAge } from './../src/js/galactic-age.js'

describe('GalacticAge', () => {

  test('should create a GalacticAge class that takes an age in Earth years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.earth).toEqual(35);
  });

  test('should convert age in Earth years to Mercury years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.mercuryAge()).toEqual(145);
  });

  test('should convert age in Earth years to Venus years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.venusAge()).toEqual(56);
  });

  test('should convert age in Earth years to Mars years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.marsAge()).toEqual(18);
  });

  test('should convert age in Earth years to Jupiter years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.jupiterAge()).toEqual(2);
  });

  test('should collect information about diet and activity levels for GalacticAge class objects', () => {
    let myAge = new GalacticAge(35, "Healthy", "Active");
    expect(myAge.earth).toEqual(35);
    expect(myAge.diet).toEqual("Healthy")
    expect(myAge.exercise).toEqual("Active")
  });

  test('should return a user life expectancy in earth years based on diet and exercise', () => {
    let myAge = new GalacticAge(35, "Healthy", "Active");
    expect(myAge.life).toEqual(90)
  });
});