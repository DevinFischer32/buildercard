import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
}

const Icon: NextPage<Props> = (props) => {
  const { src } = props
  return (
    <div>
      <Image src={src} width={48} height={48} />
    </div>
  )
}

export default Icon
