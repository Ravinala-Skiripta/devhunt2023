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
    }
}
