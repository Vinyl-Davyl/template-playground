import { render, fireEvent, waitFor } from "@testing-library/react";
import SampleDropdown from "../../SampleDropdown";

describe("SampleDropdown", () => {
  it("displays the name of the selected sample template when clicked", async () => {
    const { getByText, getByRole } = render(<SampleDropdown />);

    fireEvent.click(getByRole("button"));

    const sampleName = "Sample Template";

    fireEvent.click(getByText(sampleName));

    await waitFor(() => {
      expect(getByText(sampleName)).toBeInTheDocument();
    });
  });
});
