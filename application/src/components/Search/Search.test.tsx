import React from 'react';
import { render, screen  } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Search } from './';

describe('Search Test Suite', () => {
    it('should renders the search input and button', () => {
        render(<Search placeholder='Search...' />);
        const input = screen.getByPlaceholderText('Search...');
        const button = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
      });
    
      it('should calls onClick with the search query when button is clicked', () => {
        const onClick = jest.fn();
        render(
          <Search onClick={onClick} placeholder='Search...'/>
        );
        const input = screen.getByPlaceholderText('Search...');
        const button = screen.getByRole('button');
        const query = 'test query';
        user.type(input, query);
        user.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue(query)
      });
})