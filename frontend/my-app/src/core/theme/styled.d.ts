import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        size: (value: number) => number

        typography: {
            heading: {
                fontFamily: string
                fontWeight?: number
            }

            body: {
                fontFamily: string
                fontWeight: number
            }
        }
        name: string
        colors: {
            primary: string
            onPrimary: string
            primaryContainer: string
            OnPrimaryContainer: string
            secondary: string
            onSecondary: string
            secondaryContainer: string
            onSecondaryContainer: string
            tertiary: string
            onTertiary: string
            tertiaryContainer: string
            OnTertiaryContainer: string
            error: string
            onError: string
            errorContainer: string
            OnErrorContainer: string
            background: string
            OnBackground: string
            surface: string
            OnSurface: string
            outline: string
            surfaceVariant: string
            OnSurfaceVariant: string
        } 
    }
}