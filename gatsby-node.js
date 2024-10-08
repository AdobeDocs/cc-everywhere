exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
      type SiteSiteMetadata {
        template_id: String
        product_name: String
      }
    `);
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig();
    actions.replaceWebpackConfig({
      ...config,
      optimization: {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          name: false,
          cacheGroups: {
            styles: {
              name: "styles",
              test: /\.(css|scss)$/,
              chunks: "all",
              enforce: true,
            },
          },
        },
      },
    });
  }
};
