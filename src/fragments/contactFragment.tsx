import { graphql } from "gatsby"

export const contactFragment = graphql`
  fragment ContactTemplateFragment on WpTemplate_Contact {
    templateName
    flexibleContentModules {
      contentModule {
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Banner {
          fieldGroupName
          bannerTitle
          bannerContent
          bannerBackgroundColor
          bannerLink {
            target
            title
            url
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_CallToAction {
          fieldGroupName
          ctaTitle
          ctaContent
          ctaPhoneNumber
          ctaBackgroundColor
          ctaButton {
            target
            title
            url
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Carousel {
          fieldGroupName
          carouselTitle
          carouselText
          carouselBackgroundColor
          carouselCard {
            title
            text
            link {
              target
              title
              url
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          carouselButton {
            target
            title
            url
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_CompareProducts {
          fieldGroupName
          compareProductsTitle
          compareProductsBackgroundColor
          switchTitle
          switchText
          switchBackgroundColor
          switchOptions {
            title
            text
            link {
              target
              title
              url
            }
          }
          selectionTitle
          selectionText
          selectionBackgroundColor
          selectionOptions {
            optionCards {
              optionOne {
                title
                text
                link {
                  target
                  title
                  url
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              optionTwo {
                title
                text
                link {
                  target
                  title
                  url
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              optionImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_DataTable {
          fieldGroupName
          dataTableTitle
          dataTableText
          dataTableBackgroundColor
          dataTableButton {
            target
            title
            url
          }
          dataTable {
            columns {
              heading
              row {
                item
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Faq {
          fieldGroupName
          faqTitle
          faqText
          faqBackgroundColor
          faqButton {
            target
            title
            url
          }
          faq {
            question
            answer
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_FeatureLinks {
          fieldGroupName
          featureLinksTitle
          featureLinksText
          featureLinksBackgroundColor
          featureLinksButton {
            target
            title
            url
          }
          featureLinks {
            title
            text
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            button {
              target
              title
              url
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Form {
          fieldGroupName
          formTitle
          formText
          formBackgroundColor
          formId
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Gallery {
          fieldGroupName
          galleryTitle
          galleryText
          galleryBackgroundColor
          galleryButton {
            target
            title
            url
          }
          imageGallery {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Hero {
          fieldGroupName
          heroTitle
          heroText
          heroBackgroundColor
          heroBackgroundVideo
          heroBackgroundImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          heroPrimaryButton {
            target
            title
            url
          }
          heroSecondaryButton {
            target
            title
            url
          }
          heroSingleImage {
            image {
              altText
            }
            imageLocation
          }
          heroGallery {
            altText
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LatestArticles {
          fieldGroupName
          latestArticlesTitle
          latestArticlesText
          latestArticlesPostType
          latestArticlesPostLimit
          latestArticlesBackgroundColor
          latestArticlesButton {
            target
            title
            url
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LinkBoxes {
          fieldGroupName
          linkBoxesTitle
          linkBoxesText
          linkBoxesBackgroundColor
          linkBoxesButton {
            target
            title
            url
          }
          linkBoxes {
            title
            text
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            button {
              target
              title
              url
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_List {
          fieldGroupName
          listTitle
          listText
          listBackgroundColor
          listButton {
            target
            title
            url
          }
          list {
            title
            text
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Location {
          fieldGroupName
          locationTitle
          locationText
          locationBackgroundColor
          locationButton {
            target
            title
            url
          }
          locationMap
          locationAddress
          locationPhone
          locationHours
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Logos {
          fieldGroupName
          logosTitle
          logosText
          logosBackgroundColor
          logosButton {
            target
            title
            url
          }
          logos {
            altText
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_NavBlock {
          fieldGroupName
          navBlockTitle
          navBlockText
          navBlockBackgroundColor
          navBlockButton {
            target
            title
            url
          }
          navBlockLinks {
            link {
              target
              title
              url
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Selection {
          fieldGroupName
          selectionTitle
          selectionText
          selectionBackgroundColor
          selectionOptions {
            optionCards {
              optionOne {
                title
                text
                link {
                  target
                  title
                  url
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              optionTwo {
                title
                text
                link {
                  target
                  title
                  url
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              optionImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_SupportTiers {
          fieldGroupName
          supportTiersTitle
          supportTiersText
          supportTiersBackgroundColor
          supportTiersButton {
            target
            title
            url
          }
          supportTiersCategories {
            category
          }
          supportTiersFeatures {
            featureTitle
            featureSupport {
              supported
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Switch {
          fieldGroupName
          switchTitle
          switchText
          switchBackgroundColor
          switchOptions {
            title
            text
            link {
              target
              title
              url
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextArea {
          fieldGroupName
          textAreaTitle
          textAreaText
          textAreaBackgroundColor
          textAreaButton {
            target
            title
            url
          }
          textArea {
            title
            text
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextBlock {
          fieldGroupName
          textBlockTitle
          textBlockText
          textBlockLocation
          textBlockBackgroundColor
          textBlockButton {
            target
            title
            url
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextImage {
          fieldGroupName
          textImageTitle
          textImageText
          textImagePosition
          textImageBackgroundColor
          textImageButton {
            target
            title
            url
          }
          textImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_ThreeColumns {
          fieldGroupName
          threeColumnsTitle
          threeColumnsText
          threeColumnsBackgroundColor
          threeColumnsButton {
            target
            title
            url
          }
          columns {
            title
            text
            link {
              target
              title
              url
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Videos {
          fieldGroupName
          videosTitle
          videosText
          videosBackgroundColor
          videosButton {
            target
            title
            url
          }
          videos {
            videoEmbedLink
            text
          }
        }
      }
    }
  }
`