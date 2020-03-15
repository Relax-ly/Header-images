import React from "react";
import { shallow } from "enzyme";
import Testing from "../client/src/Testing";

it('should show text inside Test', () => {
  const wrapper = shallow(<Testing />);
  const span = wrapper.find("span");
  const result = span.text();

  expect(result).toBe("This is for testing Jest/Enzyme");
})