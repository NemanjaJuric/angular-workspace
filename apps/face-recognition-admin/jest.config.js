module.exports = {
  name: 'face-recognition-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/face-recognition-admin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
