export class GalacticAge {
  constructor(earth, life) {
    this.earth = earth;
    this.life = life
  }


  mercuryAge() {
    return Math.floor(this.earth / .24)
  }

  venusAge() {
    return Math.floor(this.earth / .62)
  }

  marsAge() {
    return Math.floor(this.earth / 1.88)
  }

  jupiterAge() {
    return Math.floor(this.earth / 11.86)
  }
}