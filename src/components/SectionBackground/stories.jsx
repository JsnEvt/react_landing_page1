import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          dolorem, incidunt voluptas impedit neque tempore eum, est doloremque
          sunt placeat eos debitis et velit laboriosam quas consequatur
          molestias deleniti delectus.
        </p>
      </div>
    ),
  },

  // argTypes: {
  //   children: { type: '' },
  // },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
