import webpack from 'webpack';
import paths from './paths';

const devConfig: webpack.Configuration = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: paths.outputPath,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
};

export default devConfig;
