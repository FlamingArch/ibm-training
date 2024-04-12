import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.Number,
  },
  productName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  starRating: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  productAvailable: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  productCode: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
