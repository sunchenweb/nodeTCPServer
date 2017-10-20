const crypto = require('crypto');
exports.md5 = function (string) {
    return crypto.createHash('md5').update(new Buffer(string)).digest('hex');
}
// moudle.exports.md5 = function (string) {
//     return crypto.createHash('md5').update(new Buffer(string)).digest('hex');
// };