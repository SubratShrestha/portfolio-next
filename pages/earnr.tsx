import {
  Box,
  Flex,
  Heading,
  Tag,
  Image,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {EffectCards, Mousewheel} from 'swiper'
import 'swiper/css/bundle'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import works from '../libs/work'
import CenteredContainer from '../components/layouts/centeredContainer'

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCards, Mousewheel])

const EarnrPage: NextPage = () => {
  const data = works['earnr']
  let images: Array<string> = []
  if (data.numImages) {
    for (let i = 1; i <= data.numImages; i += 1) {
      images.push(`/images/earnr/earnr-${i}.jpg`)
    }
  }

  return (
    <Box height='100%' width='100%' pt={20} px={{md: 10, base: 3}}>
      <Flex flexDirection='row' justifyContent='space-between'> 
        <Heading as='h1' fontSize="2xl">
          {data.title}
        </Heading>
        <Heading as='h1' fontSize="2xl">
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
              // color={value.textColor}
              key={index}
              // backgroundColor={value.color}
            >
              {value.value}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
      <Swiper
        style={{ marginTop: '30px' }}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        mousewheel
      >
        {images.map((source, i) => (
          <SwiperSlide>
              <CenteredContainer maxW="100%" height="100%">
            <Image borderRadius={10} src={source} alt={`earnr image-${i}`} width={{md: "80%", base: "100%"}} />
            </CenteredContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default EarnrPage
