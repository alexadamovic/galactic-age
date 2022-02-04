import { GalacticAge } from './../src/js/galactic-age.js'

describe('GalacticAge', () => {
  test('should create a GalacticAge class that takes an age in earth years', () => {
    let myAge = new GalacticAge(35);
    expect(myAge.earth).toEqual(35);
  });
});