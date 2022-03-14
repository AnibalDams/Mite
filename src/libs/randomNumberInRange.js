/**
 * Numero ramdom en un rango determinado por dos números.
 * @param {number} min Número minimo en el rango
 * @param {number} max Número maximo en el rango
 * @return {number} número random en el rango proveido
 * @example
 * const numRandom = random(0,20) // 12, 13, 6, ...
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min * 1) + min);
}

export default random;
