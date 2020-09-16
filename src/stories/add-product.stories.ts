import { Meta, Story } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddProductComponent } from 'src/app/product/add-product/add-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
export default {
    title: 'Add Edit Component',
    component: AddProductComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<AddProductComponent> = (args: AddProductComponent) => ({
    component: AddProductComponent,
    moduleMetadata: {
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            FormsModule,
            ReactiveFormsModule,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [AddProductComponent],
        providers: [provideMockStore({})],
    },
    props: { ...args },
});
export const Default = Template.bind({});