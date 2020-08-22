import path from 'path';

export default {
  root: path.resolve(__dirname, '../', '..'),
  entryPath: path.resolve(__dirname, '../', '..', 'src/index.tsx'),
  outputPath: path.resolve(__dirname, '../', '..', 'build'),
  templatePath: path.resolve(__dirname, '../', '..', 'public/index.html'),
};
