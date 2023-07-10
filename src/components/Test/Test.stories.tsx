  import React from 'react';
    import { Meta, Story } from '@storybook/react';
    import Test from './Test';
  
    export default {
      component: Test,
      title: 'Librerizky/Test',
      argTypes: {},
    } as Meta;

    export const Primary: Story = (args) => <Test {...args} />;
    Primary.args = {
      label: 'Test',
      primary: true,
    };