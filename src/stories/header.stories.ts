import { Meta, Story } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
export default {
    title: 'Header Component',
    component: HeaderComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    moduleMetadata: {
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterTestingModule,
        ],
        declarations: [HeaderComponent],
        providers: [],
    },
    props: { ...args },
});
export const Default = Template.bind({});