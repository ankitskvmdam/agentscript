import { terser } from 'rollup-plugin-terser'
import urlResolve from 'rollup-plugin-url-resolve'
import cleanup from 'rollup-plugin-cleanup'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
    {
        input: './config/turf.js',
        output: {
            file: 'vendor/turf.js',
            format: 'esm',
        },
        plugins: [urlResolve(), cleanup()],
    },

    {
        input: './node_modules/@turf/turf/dist/es/index.js',
        output: {
            file: 'vendor/turf.all.js',
            format: 'esm',
        },
        plugins: [nodeResolve(), commonjs(), cleanup()],
    },

    {
        input: './node_modules/@turf/turf/dist/es/index.js',
        output: {
            file: 'vendor/turf.all.min.js',
            format: 'esm',
        },
        plugins: [nodeResolve(), commonjs(), terser()],
    },

    {
        input: './config/three.all.js',
        output: {
            file: 'vendor/three.js',
            format: 'esm',
        },
        plugins: [cleanup()],
    },

    {
        input: './config/three.all.js',
        output: {
            file: 'vendor/three.min.js',
            format: 'esm',
        },
        plugins: [terser()],
    },

    {
        input: 'node_modules/three/src/core/Object3D.js',
        output: {
            file: 'vendor/Object3D.js',
            format: 'esm',
        },
        plugins: [cleanup()],
    },
    // {
    //     input: './tests/steganography.js',
    //     output: {
    //         file: 'vendor/steganography.esm.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     plugins: [cleanup()],
    // },

    // {
    //     input: './node_modules/three/build/three.module.js',
    //     output: {
    //         file: 'vendor/three.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     plugins: [copy()],
    // },
    // {
    //     input: './node_modules/three/build/three.module.js',
    //     output: {
    //         file: 'vendor/three.min.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     plugins: [copy(), terser()],
    // },

    // {
    //     input: './node_modules/three/examples/jsm/controls/OrbitControls.js',
    //     output: {
    //         file: 'vendor/OrbitControls.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     // plugins: [copy()],
    // },
    // {
    //     input: './node_modules/three/examples/jsm/controls/OrbitControls.js',
    //     output: {
    //         file: 'vendor/OrbitControls.min.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     plugins: [copy(), terser()],
    // },

    // {
    //     input: 'node_modules/three/src/core/Object3D.js',
    //     output: {
    //         file: 'vendor/Object3D.min.js',
    //         format: 'esm',
    //         // banner: '/* eslint-disable */',
    //     },
    //     plugins: [terser()],
    // },
]
