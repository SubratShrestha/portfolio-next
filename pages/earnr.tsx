import {
  Box,
  Flex,
  Heading,
  HStack,
  Tag,
  Image,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import works from '../libs/work'

SwiperCore.use([Navigation, Pagination, Scrollbar])

const EarnrPage: NextPage = () => {
  const data = works['earnr']
  let images: Array<string> = []
  if (data.numImages) {
    for (let i = 1; i <= data.numImages; i += 1) {
      images.push(`/images/earnr/earnr-${i}.png`)
    }
  }

  return (
    <Box height='100%' width='100%' pt={20}>
      <Flex flexDirection='row' justifyContent='space-between' px={{md: 10, base: 3}}>
        <Heading as='h1' fontSize="lg">
          {data.title}
        </Heading>
        <Heading as='h1' fontSize="lg">
          Software Engineer Intern
        </Heading>
      </Flex>
      <Divider
        height='1px'
        color={useColorModeValue('black', 'gray.300')}
        marginY={3}
      />
      <Wrap>
        {data.tags?.map((value, index) => (
          <WrapItem>
            <Tag
              color={value.textColor}
              key={index}
              backgroundColor={value.color}
            >
              {value.value}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
      <Swiper
        style={{ marginTop: '20px' }}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation
      >
        {images.map((source, i) => (
          <SwiperSlide>
            <Image borderRadius={10} src={source} alt={`earnr image-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default EarnrPage
