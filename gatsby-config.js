require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Estudio Moncada`,
    description: `Estudio de diseño, modelado 3d, Rendering, animación 3d, Tours virtuales y serviós de porducción de material audiovisual.`,
    author: `@estudioMoncada`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: ["clients", "images", "projects", "services"],
        //If using single types place them in this array.
        singleTypes: ["about-us", "home", "page-portfolio", "page-services"],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // name: "fonts",
        // path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        // google: {
        //   families: ["DM Serif Display:italic"],
        // },
        custom: {
          families: ["Circular Std"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Serif Display`,
            variants: [`400italic`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Estudio Moncada`,
        short_name: `Moncada.co`,
        start_url: `/`,
        background_color: `#131414`,
        theme_color: `#131414`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
