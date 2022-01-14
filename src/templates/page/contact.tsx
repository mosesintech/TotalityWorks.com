import React from "react"
import { graphql } from "gatsby"

import { TemplatePageProps } from "../../interfaces"
import FlexibleContent from "../../components/FlexibleContent"
import Layout from "../../components/layout"

const ContactPageTemplate: React.FC<TemplatePageProps> = props => {
  const {
    data: {
      page: { title, uri, slug, template },
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
          }}
        />
      )}
    </Layout>
  )
}

export default ContactPageTemplate

export const FlexibleContentQuery = graphql`
  query ContactPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      slug
      uri
      template {
        ... on WpTemplate_Contact {
          ...ContactTemplateFragment
        }
      }
    }
  }
`