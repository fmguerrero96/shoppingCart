import { render, screen } from '@testing-library/react';
import Cart from '../src/components/Cart';
import '@testing-library/jest-dom'
import { describe, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";

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
});