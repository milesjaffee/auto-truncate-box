import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/AutoTruncateBox.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
  },
  plugins: [typescript()],
  external: ['react', 'react-dom'],
};