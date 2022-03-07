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
                      Reconstructed signup/onboarding application for new
                      investors using <b>Formik</b> to allow for easier addition
                      and modification of onboarding questions.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Developed Bonus code functionality to the platform using{' '}
                      <b>AWS Appsync</b> and new <b>GraphQL</b> queries.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Added investment management functionality to the dashboard
                      application using <b>React</b> with <b>TypeScript</b>.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Developed automated end-to-end tests for the entire
                      frontend using <b>Cypress</b>.
                    </ChevronList>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ChevronList>
                      Converted the React landing page into a <b>Webflow</b>{' '}
                      project for easier modification.
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
