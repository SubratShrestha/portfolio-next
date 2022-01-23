import { Wrap, WrapItem, Tag } from '@chakra-ui/react'
import work from '../../libs/work'

const WrapTags = ({ name }: { name: string }) => {
  const data = work[name]

  return (
    <Wrap>
      {data.tags?.map((value, index) => (
        <WrapItem>
          <Tag key={index}>{value}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default WrapTags
