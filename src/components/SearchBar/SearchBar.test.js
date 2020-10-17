import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

const props = {
    handleChange: jest.fn(),
    onSubmit: jest.fn()
};

const wrap = shallow(<SearchBar {...props} />);

describe("<SearchBar />", () => {
    it("renders the component successfully", () => {
        expect(wrap).toMatchSnapshot();
    });
});
