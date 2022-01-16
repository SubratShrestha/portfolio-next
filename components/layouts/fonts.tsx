import { Global } from '@emotion/react'

/*
* M rounded 1c: @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1C:wght@300;700&display=swap");
* lato: @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
* */
const FontProvider = () => {
  return (
    <Global
      styles={`
          @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
          * { font-family: "Lato" }
        `}
    />
  )
}

export default FontProvider
