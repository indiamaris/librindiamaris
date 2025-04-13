import BookCard from "./book-card";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useState } from "react";

const bookForTest = {
  id: "1",
  isbn: "9780061120084",
  title: "To Kill a Mockingbird",
  authors: "Harper Lee",
  resume:
    "The story of racial injustice and the loss of innocence in the American South.",
  stars: 5,
  publisher: "HarperCollins",
};

test("renders a book card with a cover picture", () => {
  render(<BookCard book={bookForTest} />);
  expect(screen.getByTestId("book-title")).toHaveTextContent(bookForTest.title);
  expect(screen.getByTestId("book-authors")).toHaveTextContent(
    bookForTest.authors,
  );
  expect(screen.getByTestId("book-stars")).toBeInTheDocument();
});
