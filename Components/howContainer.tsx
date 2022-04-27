import { NextPage } from 'next'
import Icon from './icon'

interface Props {
  number: number
  src: string
  header: string
  description: string
}

const HowContainer: NextPage<Props> = (props) => {
  const { src, header, description, number } = props
  return (
    <div>
      <div className="flex items-center py-2 font-Playfair text-2xl">
        <Icon src={src} />
        <h1 className="mx-2">{number}.</h1>
        <h1>{header}</h1>
      </div>
      <div className=" px-3">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HowContainer
