import { render, screen } from '@testing-library/react';
import CartItem from '../src/components/CartItem';
import '@testing-library/jest-dom'
import { describe, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom"; 

describe("CartItem component", () => {
    it('Indicates that the cart is empty if cart contains no items', () => {
        const sampleCart = []
        render(
            <BrowserRouter>
                <CartItem cart={sampleCart} />
            </BrowserRouter>
        );
        const cartIsEmpty = screen.getByText("Cart is empty"); 
        expect(cartIsEmpty).toBeInTheDocument();
    });

    it("Displays product if there are items in the cart", () => {
        const sampleCart = ['helo']
        render(
            <BrowserRouter>
                <CartItem cart={sampleCart} />
            </BrowserRouter>
        );
        const cartProduct = screen.getByTestId('cartProduct')
        expect(cartProduct).toBeInTheDocument()
    });
});