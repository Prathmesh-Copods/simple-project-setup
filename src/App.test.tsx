import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  describe("when button is clicked", () => {
    it("should increment the counter", async () => {
      render(<App />);
      await user.click(screen.getByRole("button"));
      expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
    });
  });
});
