import { Meta, Story } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from 'src/app/register/register.component';
export default {
    title: 'Register RegisterComponent',
    component: RegisterComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
    component: RegisterComponent,
    moduleMetadata: {
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterTestingModule,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [RegisterComponent],
        providers: [provideMockStore({})],
    },
    props: { ...args },
});
export const Default = Template.bind({});