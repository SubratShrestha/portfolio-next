import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 32px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  const s_logo = `/images/contents/s-logo${useColorModeValue('', '-dark')}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={s_logo} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            Subrat Shrestha
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
