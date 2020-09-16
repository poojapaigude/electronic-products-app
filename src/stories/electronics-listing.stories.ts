import { Meta, Story } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectronicsListingComponent } from 'src/app/product/electronics-listing/electronics-listing.component';
const dummyData = [
    {
        'id': 1,
        'productName': 'Dell Inspiron',
        'description': 'Dell Inspiron 3493 14-inch FHD Laptop (10th Gen Ci5-1035G1/8GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver) E-C560511WIN9',
        'category': 'Laptops'
    },
    {
        'id': 2,
        'productName': 'Apple iPhone 11',
        'description': '6.1-inch (15.5 cm) Liquid Retina HD LCD display (64GB) - (Product) RED',
        'category': 'Cell Phones'
    }
];

export default {
    title: 'Electronics Listing Component',
    component: ElectronicsListingComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<ElectronicsListingComponent> = (args: ElectronicsListingComponent) => ({
    component: ElectronicsListingComponent,
    moduleMetadata: {
        imports: [
            FormsModule,
            ReactiveFormsModule,
            RouterTestingModule,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [ElectronicsListingComponent],
        providers: [provideMockStore({})],
    },
    props: { ...args, prducts: dummyData },
});
export const Default = Template.bind({});