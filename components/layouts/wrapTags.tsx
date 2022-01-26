import { Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { fullList, relevantWork } from '../../libs/work'

const WrapTags = ({ name, full = false }: { name: string, full?: boolean }) => {
  const data = full ? fullList[name] : relevantWork[name]

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
