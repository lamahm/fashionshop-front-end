import { Product } from 'src/app/models/product.model';
export class CartItem {
    _id: string;
    productName: string;
    quantity: number;
    price: number;
    userId: string;
    productId: string;
}
 