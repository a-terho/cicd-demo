import { test, describe } from 'node:test';
import assert from 'node:assert';
import listHelper from '../utils/list_helper.js';

import { blogs, blogsMany } from './data.js';

describe('mostLikes', () => {
  test('return value is in correct format', () => {
    const result = listHelper.mostLikes(blogs);

    assert.strictEqual(typeof result.author, 'string', 'author: wrong type');
    assert.strictEqual(typeof result.likes, 'number', 'likes: wrong type');
  });

  // dataset 1
  test('dataset 1 - finds author with the most likes', () => {
    const result = listHelper.mostLikes(blogs);
    assert.strictEqual(result.author, 'freeCodeCamp');
  });

  test('dataset 1 - returns the correct number of total likes', () => {
    const result = listHelper.mostLikes(blogs);
    assert.strictEqual(result.likes, 760);
  });

  // dataset 2
  test('dataset 2 - finds author with the most likes', () => {
    const result = listHelper.mostLikes(blogsMany);
    assert.strictEqual(result.author, 'Edsger W. Dijkstra');
  });

  test('dataset 2 - returns the correct number of total likes', () => {
    const result = listHelper.mostLikes(blogsMany);
    assert.strictEqual(result.likes, 17);
  });
});
