import React from "react";
import { render, cleanup } from "@testing-library/react";
import Search from "./index";

afterEach(cleanup);

describe("Search", () => {
    it("should check search button", () => {
        const { getByText } = render(<Search />);

        const searchButton = getByText("Search");
        expect(searchButton.innerHTML).toBe("Search");
        expect(searchButton.type).toBe("button");
    });
});
