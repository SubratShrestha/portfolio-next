import { Global } from '@emotion/react';

const FontProvider = () => {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      `}
    />
  );
};

export default FontProvider;
