import webpack from 'webpack';
import paths from './paths';

const devConfig: webpack.Configuration = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: paths.outputPath,
  },
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    clientLogLevel: 'silent',
    quiet: true,
    // writeToDisk: true /* Tells devServer to write generated assets to the disk. The output is written to the output.path directory. By default: webpack-dev-server keeps bundle files in memory and serves */
  },
}

export default devConfig;