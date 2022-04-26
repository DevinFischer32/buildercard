import { NextPage } from 'next'
import React from 'react'

interface Props {
  header: string
  subHeader: string
}

const WhyContainer: NextPage<Props> = (props) => {
  const { header, subHeader } = props
  return (
    <div>
      <h1 className="font-Playfair">{header}</h1>
      <h1>{subHeader}</h1>
    </div>
  )
}

export default WhyContainer
