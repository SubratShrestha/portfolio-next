import {
  Box,
  Flex,
  Heading,
  Tag,
  Image,
  useColorModeValue,
  Wrap,
  WrapItem,
  List,
  ListItem,
  Text,
  ListIcon
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Mousewheel } from 'swiper'
import 'swiper/css/bundle'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import works from '../libs/work'
import CenteredContainer from '../components/layouts/centeredContainer'
import { ChevronRightIcon } from '@chakra-ui/icons'
import WorkHeader from '../components/layouts/workHeader'
import WorkContainer from '../components/layouts/workContainer'

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
    <WorkContainer>
      <WorkHeader title={data.title} position={data.position || ''} />

      <Divider />

      <Wrap>
        {data.tags?.map((value, index) => (
          <WrapItem>
            <Tag key={index}>{value}</Tag>
          </WrapItem>
        ))}
      </Wrap>

      <Flex marginTop='30px' flexDirection={{ base: 'column', md: 'row' }}>
        <Swiper
          style={{ flex: 1.5, maxWidth: '100%', marginBottom: '30px' }}
          spaceBetween={50}
          slidesPerView={1}
          pagination
          mousewheel
        >
          {images.map((source, i) => (
            <SwiperSlide>
              <CenteredContainer
                justify='flex-start'
                maxW='100%'
                height='100%'
                padding='0'
              >
                <Image
                  borderRadius={10}
                  src={source}
                  alt={`earnr image-${i}`}
                  width='100%'
                />
              </CenteredContainer>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box flex={1} paddingLeft={{ md: 5, base: 0 }} paddingBottom={10}>
          <Heading
            as='h1'
            fontSize={{ md: '2xl', base: 'xl' }}
            marginBottom={3}
          >
            What I did
          </Heading>
          <List spacing={4}>
            <ListItem>
              <Flex>
                <ListIcon as={ChevronRightIcon} marginTop={1} />
                <Text>
                  Reconstructed signup/onboarding application for new investors
                  using <b>Formik</b> to allow for easier addition and
                  modification of onboarding questions.
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <ListIcon as={ChevronRightIcon} marginTop={1} />
                <Text>
                  Developed Bonus code functionality to the platform using{' '}
                  <b>AWS Appsync</b> and new <b>GraphQL</b> queries.
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <ListIcon as={ChevronRightIcon} marginTop={1} />
                <Text>
                  Added investment management functionality to the dashboard
                  application using <b>React</b> with <b>TypeScript</b>.
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <ListIcon as={ChevronRightIcon} marginTop={1} />
                <Text>
                  Developed automated end-to-end tests for the entire frontend
                  using <b>Cypress</b>.
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <ListIcon as={ChevronRightIcon} marginTop={1} />
                <Text>
                  Converted the React landing page into a <b>Webflow</b> project
                  for easier modification.
                </Text>
              </Flex>
            </ListItem>
            ))
          </List>
        </Box>
      </Flex>
    </WorkContainer>
  )
}

export default EarnrPage
