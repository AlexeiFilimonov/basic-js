const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains = domains.map(el => el.split('.'));
  domains.forEach(el => {
    let temp = ''
    for (let i = el.length - 1; i >= 0; i--) {
      if (result[temp + '.' + el[i]]) result[temp + '.' + el[i]]++;
      else result[temp + '.' + el[i]] = 1;
      temp += '.' + el[i]
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
