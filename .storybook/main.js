const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    const projectRoot = path.resolve(__dirname, "..");

    config.resolve.alias = {
      ...config.resolve.alias,
      "class-variance-authority": path.join(
        projectRoot,
        "node_modules/class-variance-authority/dist/index.js"
      ),
      "tailwind-merge": path.join(
        projectRoot,
        "node_modules/tailwind-merge/dist/bundle-cjs.js"
      ),
    };

    config.module.rules.push({
      test: /\.m?js$/,
      include: [
        path.join(projectRoot, "node_modules/tailwind-merge"),
        path.join(projectRoot, "node_modules/class-variance-authority"),
        path.join(projectRoot, "node_modules/clsx"),
      ],
      use: {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@babel/preset-react"),
          ],
        },
      },
    });

    return config;
  },
};
