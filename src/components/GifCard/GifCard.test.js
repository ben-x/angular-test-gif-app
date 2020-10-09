import React from "react";
import { shallow } from "enzyme";
import GifCard from "./GifCard";

const props = {
    data: {},
    getGif: jest.fn()
};

const wrap = shallow(<GifCard {...props} />);

describe("<GifCard />", () => {
    it("renders the component successfully", () => {
        expect(wrap).toMatchSnapshot();
    });
});
