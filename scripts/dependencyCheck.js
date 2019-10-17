// eslint-disable no-console
const path = require('path');
const depcheck = require('depcheck');

const options = {
  specials: ['bin', 'eslint', 'jest', 'babel', 'webpack'],
  ignoreDirs: ['build'],
  ignoreMatches: ['puppeteer', 'styled-normalize'],
};

depcheck(
  path.resolve(__dirname, '..'),
  options,
  ({ dependencies, missing }) => {
    console.log(`${dependencies.length} unused dependencies.`);
    console.log(dependencies.join('\n'));

    // Filter out dependencies prefixed with "#".
    const missingFiltered = Object.keys(missing).reduce((obj, key) => {
      if (key.startsWith('#')) {
        return obj;
      }
      // eslint-disable-next-line no-param-reassign
      obj[key] = missing[key];
      return obj;
    }, {});

    console.log(`${Object.keys(missingFiltered).length} missing dependencies.`);
    console.log(missingFiltered);

    if (dependencies.length > 0 || Object.keys(missingFiltered).length > 0) {
      process.exit(1);
    }
  },
);