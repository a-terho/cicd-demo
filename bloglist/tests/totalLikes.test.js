import { test, describe } from 'node:test';
import assert from 'node:assert';
import listHelper from '../utils/list_helper.js';

import { blogsOne, blogsMany } from './data.js';

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([]);
    assert.strictEqual(result, 0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(blogsOne);
    assert.strictEqual(result, 5);
  });

  test('of a bigger list calculated right', () => {
    const result = listHelper.totalLikes(blogsMany);
    assert.strictEqual(result, 36);
  });
});
