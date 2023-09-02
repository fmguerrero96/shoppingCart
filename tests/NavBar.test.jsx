import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/navBar';
import '@testing-library/jest-dom'
import { expect } from 'vitest';
import { BrowserRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";


describe("NavBar component", () => {
    it("renders NavBar compoent", () => {
        const sampleCart = ['helo']
        render(
            <BrowserRouter>
                <NavBar cart={sampleCart} />
            </BrowserRouter>
        );
        const navBarComponent = screen.getByTestId("navBar"); 
        expect(navBarComponent).toBeInTheDocument();
        });
    
    it("should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const sampleCart = ['helo']
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <NavBar cart={sampleCart} onCartToggle={onClick} />
            </BrowserRouter>
        );
        const cartIcon = screen.getByText(/Cart/i);
        await user.click(cartIcon);
        expect(onClick).toHaveBeenCalled();
    });
});