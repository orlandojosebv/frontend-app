import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="flex border p-4 rounded shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-25 object-cover mb-4" />
            <div>
                <h3 className="text-lg "><strong>Nombre:</strong>{product.name}</h3>
                <p><strong>Referencia:</strong>{product.reference}</p>
                <p><strong>Oferta actual:</strong> {product.currentOffer}</p>
                <p><strong>Otras ofertas:</strong> {product.otherOffers}</p>
            </div>
        </div>
    );
};

export default ProductCard;
