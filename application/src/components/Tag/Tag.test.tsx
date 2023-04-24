import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Tag } from './';

describe('Tag', () => {
  it('should render the tag element with label and delete icon', () => {
    const label = 'Test Label';
   render(
      <Tag label={label} onEdit={() => {}} onDelete={() => {}} />
    );
    const labelElement = screen.getByText(label);
    const deleteIcon = screen.getByRole('button');
    expect(labelElement).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });

  it('should call onEdit when tag element is clicked', () => {
    const onEdit = jest.fn();
    render(
      <Tag label="Test Label" onEdit={onEdit} onDelete={() => {}} />
    );
    const labelElement = screen.getByText('Test Label');
    user.click(labelElement);
    expect(onEdit).toHaveBeenCalled();
  });

  it('should call onDelete when delete icon is clicked', () => {
    const onDelete = jest.fn();
    render(
      <Tag label="Test Label" onEdit={() => {}} onDelete={onDelete} />
    );
    const deleteIcon = screen.getByLabelText('delete-button');
    user.click(deleteIcon);
    expect(onDelete).toHaveBeenCalled();
  });
});
