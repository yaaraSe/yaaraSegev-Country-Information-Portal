import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
export interface IProduct {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}
export interface CartState {
  products: IProduct[];
}
const initialCartState: CartState = { products: [] };

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialCartState),
  //   withComputed(({ products }) => ({
  //     totalPrice: computed(() => ),
  //   })),
  withMethods(({ products, ...store }) => ({
    addToCart(product: IProduct) {
      const updatedProduct = [...products(), product];
      patchState(store, { products: updatedProduct });
      console.log(products());
    },
    removeItem(id: number) {
      const updatedProduct = products().filter((a) => a.productId !== id);
      patchState(store, { products: updatedProduct });
    },
    increment(id: number) {
      const updatedProduct = products().map((product) =>
        product.productId === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      patchState(store, { products: updatedProduct });
    },
    decrement(id: number) {
      const updatedProduct = products().map((product) =>
        product.productId === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      patchState(store, { products: updatedProduct });
    },
  }))
);
