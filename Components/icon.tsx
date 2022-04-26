import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
}

const Icon: NextPage<Props> = (props) => {
  const { src } = props
  return <Image src={src} />
}

export default Icon
