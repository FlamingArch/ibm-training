import mongoose from 'mongoose'

const productSchema = mongoose.Schema(   //this schema is for validation for us (bcoz mongodb is schemaless) and its for object documentation
    {
        productId:{
            type: mongoose.Schema.Types.Number
        },
        productName:{
            type: mongoose.Schema.Types.String,
            required: true
        },
        price:{
            type: mongoose.Schema.Types.Number,
            required: true
        },
        starRating:{
            type: mongoose.Schema.Types.Number,
            required: true
        },
        productAvailable:{
            type: mongoose.Schema.Types.String,
            required: true
        },
        productCode:{
            type: mongoose.Schema.Types.String,
            required: true
        }
    }
)

export default mongoose.model("Product",productSchema)  //model is an example of DECORATING 
//it attaches all the new behaviours to the object
//means it gives our collection all the behaviours of db.collection.kuchbhi (as compared to mongo shell)
//here "Product" is an alias for productSchema
