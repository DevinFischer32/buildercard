import { NextPage } from 'next'
import React from 'react'

interface Props {
  header: string
  subHeader: string
}

const WhyContainer: NextPage<Props> = (props) => {
  const { header, subHeader } = props
  return (
    <div className="mb-4 w-11/12">
      <h1 className="mb-2 font-Playfair text-2xl">{header}</h1>
      <h1>{subHeader}</h1>
    </div>
  )
}

export default WhyContainer
