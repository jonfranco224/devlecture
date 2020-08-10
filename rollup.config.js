import resolve from '@rollup/plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import svgi from 'rollup-plugin-svgi'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'app/index.js',
  output: {
    file: 'docs/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    livereload('docs'),
    svgi({
      options: {
        jsx: 'preact'
      }
    }),
    buble({
      jsx: 'h'
    }),
    resolve(),
    terser(),
    filesize({
      showMinifiedSize: false,
      showGzippedSize: false
    })
  ]
}
