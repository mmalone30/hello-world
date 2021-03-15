/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require(`path`)

 module.exports = {
   plugins: [
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: path.join(__dirname, `src`, `images`),
       },
     },
     {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          custom: {
            families: ["Segment-Regular, Segment-Medium, Segment-Semibold"],
            urls: ["/fonts/segment.css"],
          },
        },
      },
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`
   ]
 }
