const autoprefixer = require('autoprefixer');
const autoreset = require('postcss-autoreset');

module.exports = {
  plugins: [
    autoprefixer({ grid: 'autoplace' }),
    autoreset({
      margin: 0,
      padding: 0,
      borderRadius: 0,
    }),
  ],
};
