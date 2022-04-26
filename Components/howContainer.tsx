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
      <div className="flex">
        <Icon src={src} />
        <h1>{number}.</h1>
        <h1>{header}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HowContainer
