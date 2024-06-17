import React, { useState, useEffect } from 'react';
import ProductCard from './producto/ProductCard';
import TemplateUser from '../cliente/TemplateUser';

const ITEMS_PER_PAGE = 6;

const sampleProducts = [
    {
        id: 1,
        name: 'Ramo de Spiderman',
        reference: '0004',
        currentOffer: 'Día de las madres 50%',
        otherOffers: 'Oferta relámpago 20%',
        image: ''
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    {
        id: 2,
        name: 'Ramo de Batman',
        reference: '0005',
        currentOffer: 'Oferta de verano 30%',
        otherOffers: 'Oferta relámpago 10%',
        image: '/img/productos/batman.png'
    },
    // Agrega más productos de prueba aquí según sea necesario.
];

export default function OffersPage() {
    const [productos, setProductos] = useState(sampleProducts);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productos.length / ITEMS_PER_PAGE);

    const handleClick = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderProducts = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedProducts = productos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

        return selectedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
        ));
    };

    return (
        <TemplateUser>
            <div className="container mx-auto my-8">
                <h2 className="text-2xl font-bold mb-4">Oferta por productos</h2>
                <div className="grid grid-cols-2 gap-4">
                    {renderProducts()}
                </div>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={() => handleClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 mx-1 border rounded bg-[#F5855B] disabled:bg-[#F5855B]"
                    >
                        &lt;&lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index + 1)}
                            className={`px-3 py-1 mx-1 border rounded ${currentPage === index + 1 ? 'bg-[#F5855B] text-white' : 'bg-[#F5BE90]'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 mx-1 border rounded bg-[#F5855B] disabled:bg-[#F5855B]"
                    >
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </TemplateUser>
    );
}
