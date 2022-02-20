const {
  get: getModuleAliases,
  config: aliasConfig,
  load: loadAliasConfig,
} = require('alias-hq');
const path = require('path');

loadAliasConfig(path.resolve('../jsconfig.json'));
aliasConfig.baseUrl = '..';

// console.log(aliasConfig);
// console.log(getModuleAliases('jest'));

module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: getModuleAliases('jest'),
};
