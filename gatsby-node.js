exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        services: allStrapiServices {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const services = result.data.services.edges

  services.forEach(project => {
    createPage({
      path: `/portafolio/${project.node.slug}`,
      component: require.resolve("./src/templates/service.js"),
      context: {
        slug: project.node.slug,
      },
    })
  })
}
