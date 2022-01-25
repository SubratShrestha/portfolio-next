import {
  Box,
  Flex,
  Heading,
  Image,
  List,
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Mousewheel } from 'swiper'
import 'swiper/css/bundle'
import { NextPage } from 'next'
import Divider from '../components/layouts/divider'
import { relevantWork } from '../libs/work'
import CenteredContainer from '../components/layouts/centeredContainer'
import WorkHeader from '../components/layouts/workHeader'
import WorkContainer from '../components/layouts/workContainer'
import WrapTags from '../components/layouts/wrapTags'
import ChevronList from '../components/layouts/chevronList'

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCards, Mousewheel])

const EarnrPage: NextPage = () => {
  const data = relevantWork['earnr']
  let images: Array<string> = []
  if (data.numImages) {
    for (let i = 1; i <= data.numImages; i += 1) {
      images.push(`/images/earnr/earnr-${i}.jpg`)
    }
  }

  return (
    <WorkContainer>
      <WorkHeader title={data.title} position={data.position || ''} href="https://www.earnr.com.au/" />

      <Divider />

      <WrapTags name='earnr' />

      <Flex marginTop='30px' flexDirection={{ base: 'column', md: 'row' }}>
        <Swiper
          style={{ flex: 1, maxWidth: '100%', marginBottom: '30px' }}
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

        <Box flex={1} paddingLeft={{ md: 5, base: 0 }}>
          <Heading
            as='h1'
            fontSize="2xl"
            marginBottom={3}
          >
            What I did
          </Heading>
          <List spacing={4}>
            <ChevronList>
              Reconstructed signup/onboarding application for new investors
              using <b>Formik</b> to allow for easier addition and modification
              of onboarding questions.
            </ChevronList>
            <ChevronList>
              Developed Bonus code functionality to the platform using{' '}
              <b>AWS Appsync</b> and new <b>GraphQL</b> queries.
            </ChevronList>
            <ChevronList>
              Added investment management functionality to the dashboard
              application using <b>React</b> with <b>TypeScript</b>.
            </ChevronList>
            <ChevronList>
              Developed automated end-to-end tests for the entire frontend using{' '}
              <b>Cypress</b>.
            </ChevronList>
            <ChevronList>
              Converted the React landing page into a <b>Webflow</b> project for
              easier modification.
            </ChevronList>
            ))
          </List>
        </Box>
      </Flex>
    </WorkContainer>
  )
}

export default EarnrPage
