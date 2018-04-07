module.exports = {
  siteMetadata: {
    title: `Coding Titan`,
    author: `Madhusudhan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
};
