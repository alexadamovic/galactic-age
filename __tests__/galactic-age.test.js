import { GalacticAge } from './../src/js/galactic-age.js'

describe('GalacticAge', () => {

  test('should create a GalacticAge class that takes an age in Earth years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.earth).toEqual(35);
  });

  test('should convert age in Earth years to Mercury years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.mercuryAge()).toEqual(145)
  });
});