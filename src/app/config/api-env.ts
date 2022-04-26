import { environment } from "src/environments/environment";

export const mainUrl = environment.production ? 'https://api.shopping' : 'http://localhost:3000'
export const productUrl = mainUrl + '/products'
export const cartUrl = mainUrl + '/cart'