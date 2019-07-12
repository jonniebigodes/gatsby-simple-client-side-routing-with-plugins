/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/assets/imgs`, name: "images" },
    },
    {
      resolve:`gatsby-plugin-create-client-paths`,
      options:{
        prefixes: [`/app/randomclientpages/*`]
      }
    },
    {
      resolve:`gatsby-plugin-page-creator`,
      options:{
        path:'./src/pages'
      }
    }
  ],
}
