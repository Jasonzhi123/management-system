const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  addWebpackAlias({
    "@": resolve("src"),
    "@api": resolve("src/api"),
    "@assets": resolve("src/assets"),
    "@axios": resolve("src/axios"),
    "@components": resolve("src/components"),
    "@config": resolve("src/config"),
    "@pages": resolve("src/pages"),
    "@resource": resolve("src/resource"),
    "@style": resolve("src/style"),
    "@utils": resolve("src/utils"),
  }),
);