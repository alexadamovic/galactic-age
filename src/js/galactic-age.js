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
    if (this.life > this.earthAge) {
    return Math.floor(this.life / .24) - this.mercuryAge;
    } else {
      return this.mercuryAge - Math.floor(this.life / .24) + " extra years. Wow!"
    }
  }

  venusLeft() {
    if (this.life > this.earthAge) {
    return Math.floor(this.life / .62) - this.venusAge;
    } else {
      return this.venusAge - Math.floor(this.life / .62) + " extra years. Nice!"
    }
  }

  marsLeft() {
    if (this.life > this.earthAge) {
      return Math.floor(this.life / 1.88) - this.marsAge;
      } else {
        return this.marsAge - Math.floor(this.life / 1.88) + " extra years. Sweet!"
      }
    }

  jupiterLeft() {
    return Math.floor(this.life / 11.86) - this.jupiterAge;
  }
}
