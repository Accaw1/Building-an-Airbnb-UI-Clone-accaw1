import { test, expect } from "@playwright/test";

test("Home loads, filters and navigates without a document reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("status", { name: "Loading stays" })).toBeVisible();
  await expect(page.getByTestId("listing-card")).toHaveCount(8);
  await page.getByRole("textbox", { name: "Search destinations" }).fill("Toronto");
  await expect(page.getByTestId("listing-card")).toHaveCount(1);
  await page.getByRole("textbox", { name: "Search destinations" }).fill("");
  await page.getByRole("button", { name: "Cabins", exact: true }).click();
  await expect(page.getByTestId("listing-card")).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Cabins", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.getByRole("button", { name: "All homes", exact: true }).click();
  await page.getByTestId("listing-card").first().getByRole("button").click();
  await page.evaluate(() => {
    (window as Window & { navigationMarker?: string }).navigationMarker = "same-document";
  });
  await page.getByRole("link", { name: "View A little cabin, a big escape", exact: true }).click();
  await expect(page).toHaveURL(/\/rooms\/1$/);
  await expect(
    page.getByRole("heading", { name: "A little cabin, a big escape", exact: true }),
  ).toBeVisible();
  expect(await page.evaluate(() => (window as Window & { navigationMarker?: string }).navigationMarker)).toBe(
    "same-document",
  );
  await page.getByRole("link", { name: "Back to stays" }).click();
  await expect(page).toHaveURL(/\/catalog$/);
});

test("Catalog sorts by price and accepts destination queries", async ({ page }) => {
  await page.goto("/catalog");
  await expect(page.getByTestId("listing-card")).toHaveCount(8);
  const prices = () =>
    page
      .getByTestId("listing-card")
      .evaluateAll((cards) => cards.map((card) => Number(card.getAttribute("data-price"))));
  expect(await prices()).toEqual([146, 164, 172, 189, 205, 218, 235, 329]);
  await page.getByRole("combobox", { name: "Sort by price" }).selectOption("descending");
  expect(await prices()).toEqual([329, 235, 218, 205, 189, 172, 164, 146]);
  await page.getByRole("textbox", { name: "Search destinations" }).fill("Vancouver");
  await expect(page.getByTestId("listing-card")).toHaveCount(1);
  await expect(page.getByRole("complementary", { name: "Map placeholder" })).toBeVisible();
});

test("Room gallery wraps, guests stay bounded and booking computes totals", async ({ page }) => {
  await page.goto("/rooms/1");
  await expect(page.getByRole("status", { name: "Loading room" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "A little cabin, a big escape", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Previous photo" }).click();
  await expect(page.getByText("4 / 4", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Next photo" }).click();
  await expect(page.getByText("1 / 4", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Remove guest" })).toBeDisabled();
  for (let index = 0; index < 5; index++) await page.getByRole("button", { name: "Add guest" }).click();
  await expect(page.getByRole("button", { name: "Add guest" })).toBeDisabled();
  await page.getByRole("textbox", { name: "Checkout", exact: true }).fill("2026-11-18");
  await expect(page.getByText("$423 CAD", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Reserve", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Your getaway is on the calendar" })).toBeVisible();
});

test("All views fit the viewport and render their photographs", async ({ page }, testInfo) => {
  for (const route of ["/", "/catalog", "/rooms/1"]) {
    await page.goto(route);
    if (route === "/rooms/1") {
      await expect(
        page.getByRole("heading", { name: "A little cabin, a big escape", exact: true }),
      ).toBeVisible();
    } else {
      await expect(page.getByTestId("listing-card")).toHaveCount(8);
    }
    const images = page.locator("main img");
    for (let index = 0; index < (await images.count()); index++) {
      await images.nth(index).scrollIntoViewIfNeeded();
      await expect
        .poll(() => images.nth(index).evaluate((image) => (image as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (route === "/" && testInfo.project.name === "mobile") {
      const cards = page.getByTestId("listing-card");
      expect((await cards.nth(0).boundingBox())?.x).toBe((await cards.nth(1).boundingBox())?.x);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: testInfo.outputPath(`${route.replaceAll("/", "-") || "home"}.png`),
      fullPage: true,
    });
  }
});

test("Invalid room IDs show a recoverable empty state", async ({ page }) => {
  await page.goto("/rooms/missing");
  await expect(page.getByRole("heading", { name: "This stay couldn't be found" })).toBeVisible();
  await page.getByRole("link", { name: "Find another home" }).click();
  await expect(page).toHaveURL(/\/catalog$/);
});
