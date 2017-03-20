/**
 * Given an input, maps the value to a point on a bell curve
 * @param x - {number} - 0 to 1
 * @param stdD - {number} - 0 to 1
 * @param mean - {number} - 0 to 1
 * @returns {number} - 0 to 1, point on bell curve
 */
export function plotOnBell(x, stdD = .2, mean = .5)
{
    let sqrtTwoPi = Math.sqrt(2 * Math.PI * Math.pow(stdD, 2));
    let denominator = Math.E * (1 / sqrtTwoPi);
    let pow = -(Math.pow(x - mean, 2) / (2 * Math.pow(stdD, 2)));
    return Math.pow(denominator, pow);
}

export function random(min, max)
{
    return Math.random() * (max - min) + min;
}
