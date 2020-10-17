import React from "react";
import { shallow } from "enzyme";
import GifDetails from "./GifDetails";

const props = {
    data: {},
    clearGif: jest.fn()
};

const wrap = shallow(<GifDetails {...props} />);

describe("<GifDetails />", () => {
    it("renders the component successfully", () => {
        expect(wrap).toMatchSnapshot();
    });
});
