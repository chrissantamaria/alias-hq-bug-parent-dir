const { get: getModuleAliases } = require('alias-hq');

module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: getModuleAliases('jest'),
};
