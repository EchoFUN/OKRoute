/**
 *
 *
 * @fileOverview multi page for the React App.
 *
 *
 *
 *
 *
 *
 *
 *
 */

const path = require('path')
const glob = require('glob')
const paths = require('./paths')

const HtmlWebpackPlugin = require('html-webpack-plugin')

let hash = {};
const allSitePath = (isEnvDevelopment) => {
  if (false) {
    return hash
  } else {
    let entryFiles = glob.sync(paths.appPath + '/src/layouts/*');

    entryFiles.forEach((item) => {
      let filename = item.substring(item.lastIndexOf('/') + 1);
      let filePath = `${item}/index.js`;

      hash[filename] = [
        isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
        filePath
      ].filter(Boolean);
    });
  }

  return hash;
}

const htmlPlugin = (isEnvProduction, isEnvDevelopment) => {
  let fileNameLists = Object.keys(
    allSitePath(isEnvDevelopment)
  );

  let hash = [];
  fileNameLists.forEach(item => {
    // let filename = item.substring(item.lastIndexOf('/') + 1);
    hash.push(
      // Generates an `index.html` file with the <script> injected.
      // new HtmlWebpackPlugin(
      //   Object.assign(
      //     {},
      //     {
      //       inject: true,
      //       filename: item + '.html',
      //       chunks: [item],
      //       template: path.resolve('public/index.html'),
      //     },
      //     isEnvProduction
      //       ? {
      //         minify: {
      //           removeComments: true,
      //           collapseWhitespace: true,
      //           removeRedundantAttributes: true,
      //           useShortDoctype: true,
      //           removeEmptyAttributes: true,
      //           removeStyleLinkTypeAttributes: true,
      //           keepClosingSlash: true,
      //           minifyJS: true,
      //           minifyCSS: true,
      //           minifyURLs: true,
      //         },
      //       }
      //       : undefined
      //   )
      // )
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            filename: item + '.html',
            chunks: [item],
            template: paths.appHtml,
          },
          false
            ? {
              minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeRedundantAttributes: false,
                useShortDoctype: false,
                removeEmptyAttributes: false,
                removeStyleLinkTypeAttributes: false,
                keepClosingSlash: false,
                minifyJS: false,
                minifyCSS: false,
                minifyURLs: false,
              },
            }
            : undefined
        )
      )
    );
  });

  return hash;
}

module.exports = {
  allSitePath,
  htmlPlugin
}






