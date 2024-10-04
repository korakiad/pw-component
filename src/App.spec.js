import { test, expect } from "@playwright/experimental-ct-react";
import Container from "../src/Container"; // Adjust path as needed
import App from "./App";
// Mock user data to be used in tests
const mockUserData = {
  results: [
    {
      name: {
        first: "John",
        last: "Palentine",
      },
      email: "john.doe@example.com",
      location: {
        city: "New York",
        country: "USA",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
      },
    },
  ],
};

// Test suite for the Container component
test.describe("Container Component with Mocked API", () => {
  // Test case for rendering with mocked user data
  test("should display mocked user data", async ({ mount, page }) => {
    // Intercept the fetch call and provide mock response
    await page.route("https://randomuser.me/api/", async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(mockUserData),
      });
    });

    // Mount the Container component
    const component = await mount(<App />);

    // Wait for the data to load and the name to be rendered
    await component.click("button");
    // Verify that the user name is the mocked data
    const userName = await component.textContent("h2");
    expect(userName).toBe("John Doe"); // The name from mock data

    // Verify that the mocked image is displayed
    const userImage = await component.locator("img");
    expect(await userImage.getAttribute("src")).toBe(
      mockUserData.results[0].picture.large
    );
  });

  // Test case for clicking the button to fetch new mocked data
  test("should fetch new mocked user data on button click", async ({
    mount,
    page,
  }) => {
    // Intercept the fetch call and provide mock response
    await page.route("https://randomuser.me/api/", (route) => {
      route.fulfill({
        status: 200,
        body: JSON.stringify(mockUserData),
      });
    });

    // Mount the Container component
    const component = await mount(<Container />);

    // Wait for initial data load
    await component.waitForSelector("h2");
    const initialUserName = await component.textContent("h2");

    // Click the button to fetch new data
    await component.click("button");

    // Wait for the new data to load (if you're simulating a different fetch, update the mock data)
    await component.waitForTimeout(1000); // Simulating delay in fetch

    // Fetch the new user name and assert it's the same (in this case since we're using the same mock data)
    const newUserName = await component.textContent("h2");
    expect(newUserName).toEqual(initialUserName); // The name should remain the same in this case
  });
});
