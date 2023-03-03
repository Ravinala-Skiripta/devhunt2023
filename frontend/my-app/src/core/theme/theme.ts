import { DefaultTheme } from "styled-components"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})

const theme : DefaultTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: {
            fontFamily: openSans.style.fontFamily,
        }, 
        body: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 400,
        },
    }
    
}

export default theme;