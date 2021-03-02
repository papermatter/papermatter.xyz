const graphqlRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
})

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const getServices = graphqlRequest(graphql, `
    {
      allStrapiServices {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
      result.data.allStrapiServices.edges.forEach(({node}) => {
      /* Service Page */
      createPage({
        path: `/servicios/${node.slug}`,
        component: require.resolve("./src/templates/service.js"),
        context: {
          slug: node.slug,
        },
      })

      /* Porfolio Category page */
      createPage({
        path: `/portafolio/${node.slug}`,
        component: require.resolve("./src/templates/portfolioCategory.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })


  const getProjects = graphqlRequest(graphql, `
    {
      allStrapiProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
      result.data.allStrapiProjects.edges.forEach(({node}) => {
      createPage({
        path: `/portafolio/${node.slug}`,
        component: require.resolve("./src/templates/project.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })

  return Promise.all([getServices, getProjects])
}
