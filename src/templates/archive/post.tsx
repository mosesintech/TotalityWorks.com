import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../../components/Layout/Layout'
import Seo from "../../components/Seo"

const PostArchive = (props: any) => {
  const {
    data: {
      page: {
        title,
      },
      categories: { nodes: category },
    },
  } = props

  return (
    <Layout>
        <Seo title={title} />
        {category.map((node, i) => {
            return (
                <div key={i}>
                    {JSON.stringify(title, null, 2)}
                    {JSON.stringify(node, null, 2)}
                </div>
            )
        })}
    </Layout>
  )
}

export default PostArchive

export const pageQuery = graphql`
  query WordPressPostArchive($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }
    categories: allWpCategory {
      nodes {
        uri
        name
        id
        description
        posts {
          nodes {
            uri
            title
          }
        }
      }
    }
  }
`