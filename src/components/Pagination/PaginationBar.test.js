import React from "react";
import { shallow } from "enzyme";
import PaginationBar from "./PaginationBar";

const props = {
    limit: 25,
    page: 1,
    pagination: {},
    setPage: jest.fn()
};

const wrap = shallow(<PaginationBar {...props} />);

describe("<PaginationBar />", () => {
    it("renders the component successfully", () => {
        expect(wrap).toMatchSnapshot();
    });
});
