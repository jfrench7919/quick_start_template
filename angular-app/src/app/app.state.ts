import { Product } from "./components/store/models/product.model";

export interface AppState {
  readonly product: Product[];
}
