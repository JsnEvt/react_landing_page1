import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Ola mundo!!" />);
    const heading = screen.getByRole('heading', { name: 'Ola mundo!!' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render logo/image', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo!!" srcImg="image.jpg" />,
    );
    expect(screen.getByRole('img', { name: 'Ola mundo!!' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Ola mundo!!" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
