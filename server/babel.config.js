module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@database': './src/database',
        '@controllers': './src/controllers',
        '@utils': './src/utils'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
