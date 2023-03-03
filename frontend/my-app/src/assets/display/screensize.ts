import styled from 'styled-components';

const size = {
    MobileS: '320px',
    MobileM: '375px',
    MobileL: '425px',
    Tablet: '768px',
    Laptop: '1024px',
    LaptopL: '1440px',
    Desktop: '2560px'
}

export const device ={
    MobileS: `(min-width: ${size.MobileS})`,
    MobileM: `(min-width: ${size.MobileM})`,
    MobileL: `(min-width: ${size.MobileL})`,
    Tablet: `(min-width: ${size.Tablet})`,
    Laptop: `(min-width: ${size.Laptop})`,
    LaptopL: `(min-width: ${size.LaptopL})`,
    Desktop: `(min-width: ${size.Desktop})`,
}
