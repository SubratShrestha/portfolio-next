import { Box, Heading, Image, List } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { NextPage } from 'next';
import Divider from '../components/divider';
import { relevantWork } from '../libs/work';
import CenteredContainer from '../components/layouts/centeredContainer';
import WorkHeader from '../components/workHeader';
import WorkContainer from '../components/layouts/workContainer';
import WrapTags from '../components/wrapTags';
import ChevronList from '../components/chevronList';
import AnimatedPage from '../components/layouts/animatedPage';
import { stagger, fadeInUp } from '../libs/animations';
import { motion } from 'framer-motion';

SwiperCore.use([Navigation, Pagination, Mousewheel]);

const EarnrPage: NextPage = () => {
  const isMd = useMediaQuery({ query: '(min-width: 48em)' });
  const data = relevantWork['earnr'];
  let images: Array<string> = [];
  if (data.numImages) {
    for (let i = 1; i <= data.numImages; i += 1) {
      images.push(`/images/earnr/earnr-${i}.jpg`);
    }
  }

  return (
    <AnimatedPage>
      <motion.div initial="initial" animate="animate">
        <WorkContainer>
          <motion.div variants={stagger}>
            <motion.div variants={fadeInUp}>
              <WorkHeader
                title={data.title}
                position={data.position || ''}
                href="https://www.earnr.com.au/"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Divider />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <WrapTags name="earnr" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                marginTop: '30px',
                flexDirection: isMd ? 'row' : 'column'
              }}
            >
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
                      justify="flex-start"
                      maxW="100%"
                      height="100%"
                      padding="0"
                    >
                      <Image
                        borderRadius={10}
                        src={source}
                        alt={`earnr image-${i}`}
                        width="100%"
                      />
                    </CenteredContainer>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Box flex={1} paddingLeft={{ md: 5, base: 0 }}>
                <motion.div variants={fadeInUp}>
                  <Heading as="h1" fontSize="2xl" marginBottom={3}>
                    What I did
                  </Heading>
                </motion.div>
                <List spacing={4}>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Developed and tested new <b>React</b> components in{' '}
                      <b>TypeScript</b> for the signup/onboarding application.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Implemented Bonus code functionality by creating and
                      integrating new <b>GraphQL</b> queries with{' '}
                      <b>AWS Appsync</b> and <b>DynamoDB</b>.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Developed automated end-to-end tests for the frontend
                      using <b>Cypress</b>.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Converted the React landing page to a <b>Webflow</b>{' '}
                      project allowing non-developers to make changes to the
                      marketing content.
                    </ChevronList>
                  </motion.div>
                  ))
                </List>
              </Box>
            </motion.div>
          </motion.div>
        </WorkContainer>
      </motion.div>
    </AnimatedPage>
  );
};

export default EarnrPage;
