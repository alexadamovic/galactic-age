export class GalacticAge {
  constructor(earthAge, life) {
    this.earthAge = earthAge;
    this.life = life;
    this.mercuryAge = Math.floor(this.earthAge / .24);
    this.venusAge = Math.floor(this.earthAge / .62);
    this.marsAge = Math.floor(this.earthAge / 1.88);
    this.jupiterAge = Math.floor(this.earthAge / 11.86);
  }

  mercuryLeft() {
    return Math.floor(this.life / .24) - this.mercuryAge;
  }

  venusLeft() {
    return Math.floor(this.life / .62) - this.venusAge;
  }

  marsLeft() {
    return Math.floor(this.life / 1.88) - this.marsAge;
  }

  jupiterLeft() {

  }
}
