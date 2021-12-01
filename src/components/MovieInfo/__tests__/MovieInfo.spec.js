import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MovieInfo from '../MovieInfo';

const mockCloseMovieInfo = jest.fn();
const mockMovie = {
  poster_path: 'localhost',
  title: 'test title',
  vote_average: 9,
  genres: ['crime', 'drama'],
  release_date: '1999-01-01',
  runtime: 120,
  overview: 'Test overview',
};

describe('MovieInfo', () => {
  const setup = () => render(<MovieInfo
    movieInfo={mockMovie}
    closeMovieInfo={mockCloseMovieInfo}
  />);

  test('should render movie info', () => {
    const { container } = setup();
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('should invoke close Movie Info callback', () => {
    const { container } = setup();
    fireEvent.click(container.querySelector('button'));
    expect(mockCloseMovieInfo).toHaveBeenCalled();
  });
});
