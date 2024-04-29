// import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import ButtonIcon from "../ButtonIcon";

describe("test du composant buttonIcon", () => {
  test("rendu du titre du button", () => {
    // Arrange
    render(<ButtonIcon title="start" isloading={false} />);

    // Assert
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInDocument();
  });
});
