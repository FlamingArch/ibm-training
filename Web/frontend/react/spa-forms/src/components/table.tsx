import React, { useContext } from "react"
import { IProduct } from "../types"
import { ProductContext } from "../provider"
import Rating from "./rating"
import { useNavigate } from "react-router-dom"

type ProductsTableProps = {
  children: React.ReactNode
}

export function ProductsTable(props: ProductsTableProps) {
  const { toggleImage: showOrHideImage, imageVisible: show } = React.useContext(ProductContext)

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button
                className="btn btn-primary"
                onClick={showOrHideImage}
              >
                {show ? "Hide " : "Show "} Image
              </button>
            </th>
            <th>Product</th>
            <th>Code</th>
            <th>Available</th>
            <th>Price</th>
            <th>5 Star Rating</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  )
}


export function ProductsTableItem({ product }: { product: IProduct }) {
  const { imageVisible: show } = useContext(ProductContext)
  const navigate = useNavigate()

  return (
    <tr style={{ cursor: "pointer" }} key={product.productId} onClick={() => navigate(`/products/${product.productId}`)}>
      <td>
        <img
          src={product.imageUrl}
          title={product.productName}
          className="avatar"
          style={{
            width: 75,
            margin: 2,
            display: show ? "block" : "none",
          }}
        />
      </td>
      <td>
        <a>{product.productName}</a>
      </td>
      <td>{product.productCode}</td>
      <td>{product.productAvailable}</td>
      <td>{product.price}</td>
      <td>
        <Rating rating={product.starRating} />
      </td>
    </tr>
  )
}
