import { DefaultTheme } from "styled-components"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})

export const DarkTheme : DefaultTheme = {
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
    },
    name: 'dark-mode',
    colors: {
        primary: '#b0c6ff',
        onPrimary: '#002d6e',
        primaryContainer: '#18438f',
        OnPrimaryContainer: '#d9e2ff',
        secondary: '#ffb95f',
        onSecondary: '#472a00',
        secondaryContainer: '#653e00',
        onSecondaryContainer: '#ffddb8',
        tertiary: '#4fd8eb',
        onTertiary: '#00363d',
        tertiaryContainer: '#004f58',
        OnTertiaryContainer: '#97f0ff',
        error: '#ffb4ab',
        onError: '#690005',
        errorContainer: '#93000a',
        OnErrorContainer: '#ffdad6',
        background: '#001f25',
        OnBackground: '#a6eeff',
        surface: '#001f25',
        OnSurface: '#a6eeff',
        outline: '#8f9099',
        surfaceVariant: '#44464f',
        OnSurfaceVariant: '#c5c6d0',
    },
}

export default DarkTheme;