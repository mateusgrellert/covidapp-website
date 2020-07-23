const resolvers = require('./gatsby.resolve')

module.exports = {
  siteMetadata: {
    title: `CovidApp - Quarentena Inteligente`,
    url: `https://covidapp.ufsc.br`,
    description: `Aprenda como você pode ajudar a combater o Covid-19, e prevenir-se dele ao mesmo tempo.`,
    titleTemplate: `Covid App - %s`,
    twitterUsername: ``,
    contact: 'covidapp@contato.ufsc.br',
    image: '/favicons/icon-144x144.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: resolvers.resolve.alias,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/templates/base`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CovidApp - Quarentena Inteligente`,
        short_name: `CovidApp`,
        start_url: `/`,
        display: `minimal_ui`,
        icon: `src/images/icons/favicon.png`,
        icons: [
          {
            src: `/favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-162162210-1`,
        head: false,
      },
    },
  ],
}
