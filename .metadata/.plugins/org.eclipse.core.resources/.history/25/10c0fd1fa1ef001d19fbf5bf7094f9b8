const assert = require('assert');
const {CLIEngine, ESLint} = require('eslint');
const eslintrc = require('../');

const eslintCli = new (CLIEngine || ESLint)({
  useEslintrc: false,
  baseConfig: eslintrc
});

eslintCli.lintFiles([
  'index.js',
  'test/test.js',
]).then(reportList => {
  reportList.forEach(report => {
    assert.equal(report.warningCount, 0);
    assert.equal(report.errorCount, 0);
  });
});
