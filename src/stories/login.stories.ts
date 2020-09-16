import { LoginComponent } from 'src/app/login/login.component';
import { Meta, Story } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
export default {
    title: 'Login component',
    component: LoginComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<LoginComponent> = (args: LoginComponent) => ({
    component: LoginComponent,
    moduleMetadata: {
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterTestingModule,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [LoginComponent],
        providers: [provideMockStore({})],
    },
    props: { ...args },
});
export const Default = Template.bind({});