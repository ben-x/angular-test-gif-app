import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "redux/reducers";
import Home from "./index";

const renderWithRedux = (component) => {
    const store = createStore(reducers);
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

afterEach(cleanup);

describe("Home", () => {
    it("should check search button", async () => {
        const { getByText, getByPlaceholderText, container } = renderWithRedux(
            <Home />
        );

        const input = getByPlaceholderText("Enter Keyword");
        fireEvent.change(input, {
            target: { value: "omQekAmH5a2EE", name: "search" },
        });

        const searchButton = getByText("Search");
        fireEvent.click(searchButton);
        console.log(container.innerHTML);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});
