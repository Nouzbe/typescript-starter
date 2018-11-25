import * as enzyme from "enzyme";
import * as React from "react";
import { UnpluggedHello } from "./";

describe("Hello", () => {
  it("renders without throwing an error", () => {
    const hello = enzyme.shallow(<UnpluggedHello />);
    expect(hello.find(".greeting").exists()).toEqual(true);
    expect(hello.find("input").length).toEqual(1);
    expect(hello.find(".increment-button").exists()).toEqual(true);
    expect(hello.find(".decrement-button").exists()).toEqual(true);
  });

  it("renders the correct text with a counter of 1", () => {
    const hello = enzyme.shallow(<UnpluggedHello enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
  });

  it("renders the correct text with a counter of 5", () => {
    const hello = enzyme.shallow(<UnpluggedHello enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
  });

  it("throws when the enthusiasm level is negative", () => {
    expect(() => {
      enzyme.shallow(<UnpluggedHello enthusiasmLevel={-1} />);
    }).toThrow();
  });

  it("calls to increment", () => {
    const onIncrement = jest.fn();
    const hello = enzyme.shallow(<UnpluggedHello onIncrement={onIncrement} />);
    hello.find(".increment-button").prop("onClick")!({} as any);
    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it("calls to decrement", () => {
    const onDecrement = jest.fn();
    const hello = enzyme.shallow(<UnpluggedHello onDecrement={onDecrement} />);
    hello.find(".decrement-button").prop("onClick")!({} as any);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });

  it("controls its name input", () => {
    const hello = enzyme.shallow(<UnpluggedHello />);
    const input = hello.find("input");
    input.simulate("change", { target: { value: "something" } });
    expect(hello.state("name")).toEqual("something");
  });
});
