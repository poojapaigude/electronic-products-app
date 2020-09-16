
import { Products } from 'src/app/shared/models/products';
import { reducer, State } from './prodcuts.reducer';
import { ProductActionNames } from './products.actions';

const productPayload: Products = {
    id: 1,
    productName: 'Dell Inspiron',
    description: 'Dell Inspiron 3493 14-inch FHD Laptop (10th Gen Ci5-1035G1/8GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver) E-C560511WIN9',
    category: 'Laptops'
};

describe('initialStateValue', () => {
    it('is correct', () => {
        const action: ProductActionNames = {
            type: '[PRODUCTS] ADD',
            payload: productPayload,
        };
        const initialState = { products: [] };
        expect(reducer(undefined, action)).toEqual(initialState);
    });
});
