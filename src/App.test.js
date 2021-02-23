import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const cappua = screen.getByText(
    "Cappua is a place where artists lyrically fight to the death"
  );

  expect(cappua).toBeInTheDocument();
});
