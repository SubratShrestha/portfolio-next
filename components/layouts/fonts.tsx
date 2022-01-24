import { Global } from '@emotion/react'

/*
 * M rounded 1c: @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1C:wght@300;700&display=swap");
 * lato: @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
 * source code pro: @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
 * Roboto Mono: @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
 * IBM Plex: @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
 * */
const FontProvider = () => {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
        * { font-family: "Roboto Mono" }
      `}
    />
  )
}

export default FontProvider
