import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
  query getBlogData {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            author
            title
            category
            hero_image {
              childImageSharp {
                fluid( maxWidth: 800 ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 200)
          fields {
            slug
          }
        }
      }
    }
  }
`)
  return data.allMarkdownRemark.edges
}