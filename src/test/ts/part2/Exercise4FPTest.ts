import {  describe, it } from '@ephox/bedrock-client';
import {assert} from 'chai';
import { Fun, Optional } from '@ephox/katamari';
import * as Ex from '../../../main/ts/Part2Ex4FP';

describe('Exercise 4 FP', () => {
  it('map identity over array', () => {
    assert.deepEqual(['a', 'b', 'c', 'd'].map(Fun.identity), ['a', 'b','c', 'd'], 'wowo');
  });

  it('getOrElse2', () => {
    assert.equal(Ex.getOrElse2(Optional.some(2), 3), 2);
    assert.equal(Ex.getOrElse2(Optional.none(), 3), 3);
  });

  it('getOrElse3', () => {
    assert.equal(Ex.getOrElse3(Optional.some(2), 3), 2);
    assert.equal(Ex.getOrElse3(Optional.none(), 3), 3);
  });

  it('getOrElse4', () => {
    assert.equal(Ex.getOrElse4(Optional.some(2), 3), 2);
    assert.equal(Ex.getOrElse4(Optional.none(), 3), 3);
  });

  it('replaceElementWith9', () => {
    assert.deepEqual(Ex.replaceElementWith9([1, 2, 5, 7]), [9,9,9,9], '4 elements');
    assert.deepEqual(Ex.replaceElementWith9([1]), [9], '1 element');
    assert.deepEqual(Ex.replaceElementWith9([]), [], 'no element');
  });

  it('dblX2', () => {
    assert.equal(Ex.dblX2(2), 8, 'double 2 twice');
    assert.equal(Ex.dblX2(1), 4, 'double 1 twice');
    assert.equal(Ex.dblX2(0), 0, 'double 0 twice');
  });

  it('dblOs', () => {
    assert.isTrue(Ex.dblOs(Optional.some(2)).equals(Optional.some('4')), 'simple number 2');
    assert.isTrue(Ex.dblOs(Optional.some(0)).equals(Optional.some('0')), 'tricky number 0');
  });
});