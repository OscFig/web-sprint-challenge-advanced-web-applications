import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles } from '../api/fetchBubbles'
jest.mock('../utils/fetchBubbles');

test("Renders BubblePage without errors", () => {
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading