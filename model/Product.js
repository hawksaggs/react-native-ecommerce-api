import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    categories: {
        type: [String]
    },
    tags: {
        type: [String]
    },
    sellers: {
        type: [String]
    },
    originalPrice: {
        type: Number
    },
    finalPrice: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isOutOfStock: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);