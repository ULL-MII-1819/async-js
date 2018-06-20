const inspect = require("util").inspect;
const ins = (x) => console.log(inspect(x, {depth: null}));

module.exports = ins;
