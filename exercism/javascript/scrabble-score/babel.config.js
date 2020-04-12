module.exports = {
  plugins: [
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-optional-chaining", { loose: false }],
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-throw-expressions",
    "babel-plugin-macros"
  ],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current"
        },
        useBuiltIns: false
      }
    ]
  ]
}
