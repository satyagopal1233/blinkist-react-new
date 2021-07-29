
import React from 'react';
import ButtonComponent from '.';
import baseTheme from '../../../themes';
import { ThemeProvider } from "@material-ui/core/styles";
export default{
    component: ButtonComponent,
    title:'Atoms/Button',
    argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
      <ButtonComponent {...args} />
    </ThemeProvider>
  );

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    children: 'Add to Library',

};