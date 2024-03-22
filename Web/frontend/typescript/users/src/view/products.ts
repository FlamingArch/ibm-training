import IProduct from "../model/product"

class ProductsView {
  products: HTMLDivElement
  productName: HTMLInputElement
  price: HTMLInputElement
  productSubmit: HTMLButtonElement
  constructor() {
    this.products = <HTMLDivElement>document.querySelector("#products")
    this.productName = <HTMLInputElement>document.querySelector("#productName")
    this.price = <HTMLInputElement>document.querySelector("#price")
    this.productSubmit = <HTMLButtonElement>document.querySelector(".product-submit")
  }

  showProducts(productsData: IProduct[]) {
    productsData.forEach(product => {
      this.products.innerHTML +=
        `<div class = "card mb-3">
          <div class = "card-body">
            <h4 class = "card-title">${product.productName}</h4>
            <h4 class = "card-title">${product.price}</h4>
            <h3 class = "card-title">${product.starRating}</h3>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-primary">Delete</button>
          </div>
        </div>`
    });

  }
}

export default new ProductsView()
