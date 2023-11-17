import { createTheme, responsiveFontSizes } from '@mui/material/styles';

type CustomTypography = {
  'Display/01': React.CSSProperties;
  'Display/02': React.CSSProperties;
  'Display/03': React.CSSProperties;
  'Display/04': React.CSSProperties;
  'Display/05': React.CSSProperties;

  'Heading/01': React.CSSProperties;
  'Heading/02': React.CSSProperties;
  'Heading/03': React.CSSProperties;
  'Heading/04': React.CSSProperties;
  'Heading/05': React.CSSProperties;

  'Label/01': React.CSSProperties;
  'Label/02': React.CSSProperties;
  'Label/03': React.CSSProperties;
  'Label/04': React.CSSProperties;
  'Label/05': React.CSSProperties;

  'Body/XXL/400': React.CSSProperties;

  'Body/XL/400': React.CSSProperties;
  'Body/XL/500': React.CSSProperties;
  'Body/XL/600': React.CSSProperties;

  'Body/Large/400': React.CSSProperties;
  'Body/Large/500': React.CSSProperties;
  'Body/Large/600': React.CSSProperties;

  'Body/Medium/400': React.CSSProperties;
  'Body/Medium/500': React.CSSProperties;
  'Body/Medium/600': React.CSSProperties;

  'Body/Small/400': React.CSSProperties;
  'Body/Small/500': React.CSSProperties;
  'Body/Small/600': React.CSSProperties;

  'Body/Tiny/400': React.CSSProperties;
  'Body/Tiny/500': React.CSSProperties;
  'Body/Tiny/600': React.CSSProperties;

  'Body/XS/400': React.CSSProperties;
  'Body/XS/500': React.CSSProperties;
  'Body/XS/600': React.CSSProperties;
};

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'Display/01': true;
    'Display/02': true;
    'Display/03': true;
    'Display/04': true;
    'Display/05': true;

    'Heading/01': true;
    'Heading/02': true;
    'Heading/03': true;
    'Heading/04': true;
    'Heading/05': true;

    'Label/01': true;
    'Label/02': true;
    'Label/03': true;
    'Label/04': true;
    'Label/05': true;

    'Body/XXL/400': true;

    'Body/XL/400': true;
    'Body/XL/500': true;
    'Body/XL/600': true;

    'Body/Large/400': true;
    'Body/Large/500': true;
    'Body/Large/600': true;

    'Body/Medium/400': true;
    'Body/Medium/500': true;
    'Body/Medium/600': true;

    'Body/Small/400': true;
    'Body/Small/500': true;
    'Body/Small/600': true;

    'Body/Tiny/400': true;
    'Body/Tiny/500': true;
    'Body/Tiny/600': true;

    'Body/XS/400': true;
    'Body/XS/500': true;
    'Body/XS/600': true;
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        '50': '#FFF3EB',
        '100': '#FFE7D6',
        '200': '#FFCEAD',
        '300': '#FFB685',
        '400': '#FF9D5C',
        '500': '#FA8232',
        '600': '#DE732D',
        '700': '#99501F',
        '800': '#663514',
        '900': '#331B0A',
        main: '#FA8232',
        dark: '#DE732D',
      },
      secondary: {
        '50': '#EAF6FE',
        '100': '#D5EDFD',
        '200': '#ABDBFA',
        '300': '#81C9F8',
        '400': '#57B7F5',
        '500': '#2DA5F3',
        '600': '#2484C2',
        '700': '#1B6392',
        '800': '#124261',
        '900': '#092131',
        main: '#2DA5F3',
        dark: '#2484C2',
      },
      success: {
        '50': '#EAF7E9',
        '100': '#D5F0D3',
        '200': '#ABE0A7',
        '300': '#81D17C',
        '400': '#57C150',
        '500': '#2DB224',
        '600': '#248E1D',
        '700': '#1B6B16',
        '800': '#12470E',
        '900': '#092407',
        main: '#2DB224',
        dark: '#248E1D',
      },
      warning: {
        '50': '#FDFAE7',
        '100': '#FBF4CE',
        '200': '#F7E99E',
        '300': '#F3DE6D',
        '400': '#EFD33D',
        '500': '#EBC80C',
        '600': '#BCA00A',
        '700': '#8D7807',
        '800': '#5E5005',
        '900': '#2F2802',
        main: '#EBC80C',
        dark: '#BCA00A',
      },
      error: {
        '50': '#FDEEEE',
        '100': '#FCDEDE',
        '200': '#F8BCBC',
        '300': '#F59B9B',
        '400': '#F17979',
        '500': '#EE5858',
        '600': '#BE4646',
        '700': '#8F3535',
        '800': '#5F2323',
        '900': '#301212',
        main: '#EE5858',
        dark: '#BE4646',
      },
      grey: {
        '50': '#F2F4F5',
        '100': '#E4E7E9',
        '200': '#C9CFD2',
        '300': '#ADB7BC',
        '400': '#929FA5',
        '500': '#77878F',
        '600': '#5F6C72',
        '700': '#475156',
        '800': '#303639',
        '900': '#191C1F',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
    },
    typography: {
      fontFamily: 'Public Sans, sans-serif',
      'Display/01': {
        fontSize: '3.75rem',
        fontWeight: 600,
      },
      'Display/02': {
        fontSize: '3.5rem',
        fontWeight: 600,
      },
      'Display/03': {
        fontSize: '3rem',
        fontWeight: 600,
      },
      'Display/04': {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      'Display/05': {
        fontSize: '2.25rem',
        fontWeight: 600,
      },

      'Heading/01': {
        fontSize: '2rem',
        fontWeight: 600,
      },
      'Heading/02': {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      'Heading/03': {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      'Heading/04': {
        fontSize: '1rem',
        fontWeight: 600,
      },
      'Heading/05': {
        fontSize: '0.875rem',
        fontWeight: 600,
      },

      'Label/01': {
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      'Label/02': {
        fontSize: '1rem',
        fontWeight: 500,
      },
      'Label/03': {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      'Label/04': {
        fontSize: '0.75rem',
        fontWeight: 500,
      },
      'Label/05': {
        fontSize: '0.6875rem',
        fontWeight: 500,
      },

      'Body/XXL/400': {
        fontSize: '1.5rem',
        fontWeight: 400,
      },

      'Body/XL/400': {
        fontSize: '1.25rem',
        fontWeight: 400,
      },
      'Body/XL/500': {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      'Body/XL/600': {
        fontSize: '1.25rem',
        fontWeight: 600,
      },

      'Body/Large/400': {
        fontSize: '1.125rem',
        fontWeight: 400,
      },
      'Body/Large/500': {
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      'Body/Large/600': {
        fontSize: '1.125rem',
        fontWeight: 600,
      },

      'Body/Medium/400': {
        fontSize: '1rem',
        fontWeight: 400,
      },
      'Body/Medium/500': {
        fontSize: '1rem',
        fontWeight: 500,
      },
      'Body/Medium/600': {
        fontSize: '1rem',
        fontWeight: 600,
      },

      'Body/Small/400': {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
      'Body/Small/500': {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      'Body/Small/600': {
        fontSize: '0.875rem',
        fontWeight: 600,
      },

      'Body/Tiny/400': {
        fontSize: '0.75rem',
        fontWeight: 400,
      },
      'Body/Tiny/500': {
        fontSize: '0.75rem',
        fontWeight: 500,
      },
      'Body/Tiny/600': {
        fontSize: '0.75rem',
        fontWeight: 600,
      },

      'Body/XS/400': {
        fontSize: '0.6875rem',
        fontWeight: 400,
      },
      'Body/XS/500': {
        fontSize: '0.6875rem',
        fontWeight: 500,
      },
      'Body/XS/600': {
        fontSize: '0.6875rem',
        fontWeight: 600,
      },
    },
  })
);
