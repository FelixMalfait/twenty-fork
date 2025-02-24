import { fireEvent, render } from '@testing-library/react';

import { RegularSortAndFilterBar } from '../__stories__/SortAndFilterBar.stories';

it('Checks the SortAndFilterBar renders', async () => {
  const removeFunction = jest.fn();
  const cancelFunction = jest.fn();

  const { getByText, getByTestId } = render(
    <RegularSortAndFilterBar
      removeFunction={removeFunction}
      cancelFunction={cancelFunction}
    />,
  );
  expect(getByText('Test sort')).toBeDefined();

  const removeIcon = getByTestId('remove-icon-test_sort');
  fireEvent.click(removeIcon);

  expect(removeFunction).toHaveBeenCalled();
});

it('Removes sorts when cancel is pressed', async () => {
  const removeFunction = jest.fn();
  const cancelFunction = jest.fn();
  const { getByTestId } = render(
    <RegularSortAndFilterBar
      removeFunction={removeFunction}
      cancelFunction={cancelFunction}
    />,
  );
  const cancel = getByTestId('cancel-button');
  fireEvent.click(cancel);

  expect(cancelFunction).toHaveBeenCalled();
});
