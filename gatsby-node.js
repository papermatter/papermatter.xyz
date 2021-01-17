// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(
//     `
//       {
//         projects: allStrapiProjects {
//           edges {
//             node {
//               strapiId
//               slug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog articles pages.
//   const projects = result.data.projects.edges
//   projects.forEach(project => {
//     createPage({
//       path: `/portafolio/${project.node.slug}`,
//       component: require.resolve("./src/templates/project.js"),
//       context: {
//         id: project.node.strapiId,
//       },
//     })
//   })
// }
