module.exports = {
    presets: [
        ['@babel/preset-env', { bugfixes: true, loose: true }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { useSpread: true }],
    ],
}
