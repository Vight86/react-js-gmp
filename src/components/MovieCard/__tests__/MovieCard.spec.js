import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieCard from '../MovieCard';

const mockOpenMoviePopup = jest.fn();
const mockDeleteMovie = jest.fn();
const mockMovieInfo = jest.fn();
const mockMovie = {
  id: 1, title: 'test', release_date: '1995-12-17', poster_path: 'localhost', genres: ['crime', 'drama'],
};

describe('MovieCard', () => {
  const setup = () => render(
    <MovieCard
      movie={mockMovie}
      openMoviePopup={mockOpenMoviePopup}
      onDeleteMovie={mockDeleteMovie}
      openMovieInfo={mockMovieInfo}
    />,
  );

  test('should have title', () => {
    const { getByText } = setup();
    expect(getByText('test').classList.contains('title')).toBeTruthy();
  });

  test('should have poster img with correct link', () => {
    const { container } = setup();
    expect(container.querySelector('.poster img').src).toBe('http://localhost/localhost');
  });

  test('should have genres', () => {
    const { container } = setup();
    expect(container.querySelector('.genre').innerHTML).toBe(mockMovie.genres.join(', '));
  });

  test('should have release date', () => {
    const { container } = setup();
    expect(container.querySelector('.year').innerHTML).toBe('1995');
  });

  test('should invoke open movie info callback on title click', () => {
    const { container } = setup();
    fireEvent.click(container.querySelector('.title'));
    expect(mockMovieInfo).toHaveBeenCalled();
    expect(mockMovieInfo).toHaveBeenCalledWith(mockMovie);
  });

  test('should invoke open movie popup callback on title click', () => {
    const { getByText } = setup();
    fireEvent.click(getByText('edit'));
    expect(mockOpenMoviePopup).toHaveBeenCalled();
  });

  test('should invoke delete movie callback on title click', () => {
    const { getByText } = setup();
    fireEvent.click(getByText('delete'));
    expect(mockDeleteMovie).toHaveBeenCalled();
  });
});
