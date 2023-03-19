/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@gilbertharo',
    person: { name: 'gilbert', age: 28 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'gilbert', age: 28 },
      { name: 'steph', age: 28 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        // Add any options here
      },
    },
  ],
};
