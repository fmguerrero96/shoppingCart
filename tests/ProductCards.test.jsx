import { render, screen } from '@testing-library/react';
import ProductCards from '../src/components/ProductCards';
import '@testing-library/jest-dom'
import { describe, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

describe("ProductCards component", () => {
    it('Indicates that the products are loading', () => {
        render(
            <BrowserRouter>
                <ProductCards />
            </BrowserRouter>
        );
        const loadingMessage = screen.getByText("Loading products..."); 
        expect(loadingMessage).toBeInTheDocument();
    })

    it('Displays products once they are fetched', () => {
        const product = [{category: "men's clothing",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            id: 1,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: '109.95',
            rating: {rate: 3.9, count: 120},
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}];
        render(
            <BrowserRouter>
                <ProductCards products={product} />
            </BrowserRouter>
        );
        const sampleProduct = screen.getByTestId('productCard')
        expect(sampleProduct).toBeInTheDocument()
    })
});