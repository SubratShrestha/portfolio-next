import { Global } from '@emotion/react';

const FontProvider = () => {
  return (
    <Global
      styles={`
            @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1C:wght@300;700&display=swap");
        `}
    />
  );
};

export default FontProvider;
