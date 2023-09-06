import { vi } from "vitest";
import { getCurrentDateTime } from ".";

describe("getCurrentDateTime function", () => {
  it("should return the current date and time in the expected format", () => {
    // Mock the current date and time for testing purposes
    const originalDate = global.Date;
    const mockDate = new Date("2023-09-07T12:34:56");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.Date = vi.fn(() => mockDate);
    // Expected result based on the mocked date
    const expectedDate = "Sep 7 2023 12:34:56 PM";
    const result = getCurrentDateTime();
    // Restore the original Date object
    global.Date = originalDate;

    expect(result).toBe(expectedDate);
  });
});
