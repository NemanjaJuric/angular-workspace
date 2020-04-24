module.exports = {
  name: "core-domain-models",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/core/domain-models",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
