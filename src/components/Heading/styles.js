import styled from 'styled-components';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};`,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};`,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};`,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
    `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
 ${({ theme, colorDark, size, uppercase }) => css`
   color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
 //executara a funcao que define o tamanho da fonte [size] e a chave
   ${titleSize[size](theme)}
   ${titleCase(uppercase)}
   `};
   `;
