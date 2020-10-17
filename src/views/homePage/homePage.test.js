import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../utils/index";
import HomePage from "./HomePage";

const setUp = (props = {}) => {
    const component = shallow(<HomePage {...props} />);
    return component;
};

describe("Article Banner", () => {
    describe("Child components should render", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        it("Should render top searchbar on home page", () => {
            const wrapper = findByTestAttr(component, "searchbar");
            expect(wrapper.length).toBe(1);
        });
        it("Should render top searchbar on home page", () => {
            const wrapper = findByTestAttr(component, "gifdetails");
            expect(wrapper.length).toBe(0);
        });
        it("Should render top searchbar on home page", () => {
            const wrapper = findByTestAttr(component, "gifbox");
            expect(wrapper.length).toBe(1);
        });
        it("Should render successfully", () => {
            expect(component).toMatchSnapshot();
        });
    });
});
