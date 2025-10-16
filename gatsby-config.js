module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ansh Rathod`,
    description: `A list of all of my public projects.`,
    author: `@unshh`,
    keywords: `Ansh Rathod, portfolio, website, web developer, app developer`,
    image: `src/images/me.png`,
    siteUrl: `https://anshrathod.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Ansh Rathod's Portfolio`,
        short_name: `Ansh Rathod`,
        description: `A list of all of my public projects.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/me.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: `weekly`,
            priority: path === `/` ? 1.0 : 0.7,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://anshrathod.github.io`,
        sitemap: `https://anshrathod.github.io/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
