import { render, screen } from '@testing-library/react';
import Cart from '../src/components/Cart';
import '@testing-library/jest-dom'
import { describe, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom"; 

describe("Cart component", () => {
    it("renders Cart compoent", () => {
        const sampleCart = ['helo']
        render(
            <BrowserRouter>
                <Cart cart={sampleCart} />
            </BrowserRouter>
        );
        const CartComponent = screen.getByTestId("cart"); 
        expect(CartComponent).toBeInTheDocument();
        });
    
    it("Should display correct total", () => {
        const sampleCart = [{category: "men's clothing",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            id: 1,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: '109.95',
            rating: {rate: 3.9, count: 120},
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}];
        const total = sampleCart[0].price
        render(
            <BrowserRouter>
                <Cart cart={sampleCart} total={total} />
            </BrowserRouter>
        );
        const totalElement = screen.getByTestId('total').textContent
        expect(totalElement).toEqual(total)
    });
});