import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Albert Sans',
    heading: 'Albert Sans',
    mono: 'Albert Sans',
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'facebook.500',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'facebook.500',
      },
    },
  },
});
