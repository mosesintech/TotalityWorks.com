import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface SelectionProps extends FlexibleContentProps {
  selectionTitle?: string
  selectionText?: string
  selectionBackgroundColor?: string
  selectionOptions?: {
    optionCards?: [
      {
        optionOne?: {
          title?: string
          text?: string
          link?: any
          image?: any
        }
      },
      {
        optionTwo?: {
          title?: string
          text?: string
          link?: any
          image?: any
        }
      },
      {
        optionImage?: any
      }
    ]
  }
}

const Selection: React.FC<SelectionProps> = props => {
  return (
    <>
      <h1>SELECTION</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Selection