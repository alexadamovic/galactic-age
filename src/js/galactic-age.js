export class GalacticAge {
  constructor(earth) {
    this.earth = earth;
  }

  mercuryAge() {
    return Math.floor(this.earth / .24)
  }

  venusAge() {
    return Math.floor(this.earth / .62)
  }

  marsAge() {
    
  }
}