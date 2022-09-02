import { Base } from '.';

import mock, { mockBase } from './mock';

import { GridSection } from '../../components/GridSection';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
