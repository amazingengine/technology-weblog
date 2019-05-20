module.exports = {
  siteMetadata: {
    title: `Amazing engine Co., Ltd. technology weblog`,
    description: `This is Amazing engine Co., Ltd. technology weblog. We write to here some technological wisdom.`,
    titleTemplate: 'Ae tech blog',
    url:'https://tech.amazingengine.co.jp',
    image: '/assets/amazingengine-icon',
    pathname: 'null',
    article: 'null',
  },
  plugins: [
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
        trackingId: "UA-63016157-4",
        head: true,
      },
    },
  ],
}
