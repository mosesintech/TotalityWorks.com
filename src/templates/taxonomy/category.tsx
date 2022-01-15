import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo"

const Category = (props: any) => {
  const {
    data: { category },
  } = props

  return (
    <Layout>
        <Seo title='Categories' />
        {JSON.stringify(props, null, 2)}
    </Layout>
  )
}

export default Category

export const categoryQuery = graphql`
  query CategoryQuery($id: String!) {
    category: wpCategory(id: { eq: $id }) {
      id
      uri
      slug
      name
      posts {
        nodes {
          uri
          title
        }
      }
    }
  }
`