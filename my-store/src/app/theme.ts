import {extendTheme} from "@chakra-ui/react";

export const colors = {
    brand: {
        primary: 'hsl(337, 79%, 60%)',
        primaryDark: 'hsl(337, 79%, 70%)',
        primaryLight: 'hsl(337, 79%, 50%)'
    }
}

export const theme = extendTheme({colors}); 