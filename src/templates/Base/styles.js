import styled from 'styled-components';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 5.4rem;

    @media ${theme.media.lteMedium} {
    padding-top: 0;
    }
  `}
`;
