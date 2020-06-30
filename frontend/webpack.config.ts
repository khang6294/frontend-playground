import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './config/webpack-config/webpack.common';

type mode = 'production' | 'development' | 'none' | undefined;
interface WebpackConfigInput {
  mode: mode;
  presets: [];
}

const modeConfig = (env: mode): webpack.Configuration => require(`./config/webpack-config/webpack.${env}`).default;

const config = (
  { mode, presets }: WebpackConfigInput = { mode: 'production', presets: [] },
): webpack.Configuration => {
  return webpackMerge(
    {
      mode,
    },
    commonConfig,
    modeConfig(mode),
  );
};

export default config;
