import React from "react"
import { graphql } from "gatsby"

import { TemplatePageProps } from "../../interfaces"
import FlexibleContent from "../../components/FlexibleContent"
import Layout from "../../components/Layout/Layout"

const DefaultPageTemplate: React.FC<TemplatePageProps> = props => {
  const {
    data: {
      page: { title, uri, slug, content, template },
    },
  } = props

  return (
    <Layout>
      {!!template && (
        <FlexibleContent
          modules={template.flexibleContentModules.contentModule}
          data={{
            title,
            uri,
            slug,
            content
          }}
        />
      )}
    </Layout>
  )
}

export default DefaultPageTemplate

export const FlexibleContentQuery = graphql`
  query DefaultPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      slug
      uri
      content
      template {
        ... on WpDefaultTemplate {
          ...DefaultTemplateFragment
        }
      }
    }
  }
`