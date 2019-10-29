/**
 * api: {
 *    extendPackage // 修改 `package.json` 里的字段
 *    injectImports //
 *    onCreateComplete
 *    render
 *
 * }
 */
module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)


  api.extendPackage({
    // scripts: {
    //   dev: 'vue-cli-service serve',
    //   test: 'vue-cli-service test'
    // },
    dependencies: {
      "axios": "^0.18.0"
    }
  })


  api.injectImports(utils.getMain(), `import 'plugins/request';`)
  api.injectImports(utils.getMain(), `import './global.scss';`)
  api.render({
    './src/global.scss': './templates/src/global.scss'
  });

   api.render({
    './src/plugins/request.js': './templates/src/plugins/request.js'
  });



  // 来自prompt的配置
  if (opts.foo) {
    // 有条件地生成文件
  }
};
