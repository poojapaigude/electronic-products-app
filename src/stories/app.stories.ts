import { AppComponent } from 'src/app/app.component';
import { Meta, Story } from '@storybook/angular';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { reducers } from 'src/app/store/app.state';
import { ProductsEffects } from 'src/app/store/products/products.effects';
import { AccessEffects } from 'src/app/store/user-access/user.effects';
import { LoginComponent } from 'src/app/login/login.component';
import { AddProductComponent } from 'src/app/product/add-product/add-product.component';
import { ElectronicsListingComponent } from 'src/app/product/electronics-listing/electronics-listing.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

export default {
    title: 'App component',
    component: AppComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    moduleMetadata: {
        declarations: [
            AppComponent,
            ElectronicsListingComponent,
            AddProductComponent,
            LoginComponent,
            RegisterComponent,
            HeaderComponent        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            StoreModule.forRoot(reducers, {}),
            EffectsModule.forRoot([ProductsEffects, AccessEffects]),
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    },
    props: { args },
});
export const App = Template.bind({});