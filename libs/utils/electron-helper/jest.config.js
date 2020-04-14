module.exports = {
  name: 'utils-electron-helper',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/utils/electron-helper',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
