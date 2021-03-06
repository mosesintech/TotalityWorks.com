import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface LinkBoxesProps extends FlexibleContentProps {
  linkBoxesTitle?: string
  linkBoxesText?: string
  linkBoxesBackgroundColor?: string
  linkBoxesButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkBoxes?: []
}

const LinkBoxes: React.FC<LinkBoxesProps> = props => {
  return (
    <>
      <h1>LINK BOXES</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default LinkBoxes