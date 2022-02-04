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
    expect(myAge.life).toEqual(80)
  });
});