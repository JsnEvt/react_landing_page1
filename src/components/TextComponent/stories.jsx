import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Expedita ipsum eligendi beatae dolorem pariatur odio eum sed?
    Voluptas quas aut officiis debitis et. Odit perspiciatis
    sequi non mollitia fuga repellendus?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
