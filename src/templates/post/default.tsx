import React from "react"
import { graphql, PageProps } from "gatsby"
import parser from "html-react-parser"

import Layout from '../../components/Layout/Layout'

interface Props extends PageProps {
  data: {
    post: {
      id?: string
      title?: string
    }
    posts?: any
  }
}

const PostSingle: React.FC<Props> = (props) => {
  const {
    data: {
      post: {
        id,
        title,
      },
      posts,
    },
  } = props

  return (
    <Layout>
      {JSON.stringify(props, null, 2)}
    </Layout>
  )
}

export const CollectionQuery = graphql`
  query DefaultSinglePost($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      title
      uri
      date
    }
    posts: allWpPost {
      nodes {
        id
        title
        uri
        date
      }
    }
  }
`

export default PostSingle