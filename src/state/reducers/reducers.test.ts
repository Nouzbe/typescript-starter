import { StoreState } from "../../types";
import { decrementEnthusiasm, incrementEnthusiasm } from "../actions";
import { enthusiasm } from "./";

test("enthusiasm", () => {
  const initialState: StoreState = {
    languageName: "TypeScript",
    enthusiasmLevel: 1,
  };

  it("increments", () => {
    expect(enthusiasm(initialState, incrementEnthusiasm())).toEqual({
      languageName: "TypeScript",
      enthusiasmLevel: 2,
    });
  });

  it("decrements", () => {
    expect(enthusiasm(initialState, decrementEnthusiasm())).toEqual({
      languageName: "TypeScript",
      enthusiasmLevel: 0,
    });
  });
});
