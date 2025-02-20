const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const additionArr = [];
  for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); i++) {
    additionArr.push((options.hasOwnProperty('addition')) ? String(options.addition) : '');
  }
  const addition = additionArr.join(options.additionSeparator ? options.additionSeparator : '|');
  const resArr = [];
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    resArr.push(str + addition);
  }
  return resArr.join(options.separator ? options.separator : '+')
}

module.exports = {
  repeater
};
