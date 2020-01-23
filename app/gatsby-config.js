let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  siteMetadata: {
    title: `Amazing engine Co., Ltd. technology weblog`,
    description: `This is Amazing engine Co., Ltd. technology weblog. We write to here some technological wisdom.`,
    titleTemplate: 'Ae tech blog',
    url: `https://${process.env.DOMAIN}`,
    siteUrl: `https://${process.env.DOMAIN}`,
    image: '/assets/amazingengine-icon',
    pathname: 'null',
    article: 'null',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-transformer-asciidoc`,
      options: {
        attributes: {
          imagesdir: `/images`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://${process.env.DOMAIN}`,
        sitemap: `https://${process.env.DOMAIN}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
