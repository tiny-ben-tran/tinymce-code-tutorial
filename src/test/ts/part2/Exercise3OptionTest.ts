import { describe, it } from '@ephox/bedrock-client';
import { Optional } from '@ephox/katamari';
import { assert } from 'chai';
import * as Ex from '../../../main/ts/Part2Ex3Optional';

describe('Exercise3OptionTest', () => {
  it('getProtocol', () => {
    assert.equal(Ex.getProtocol('https://frog.com').getOrDie(), 'https');
    assert.equal(Ex.getProtocol('http://frog.com').getOrDie(), 'http');
    assert.isTrue(Ex.getProtocol('frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('://frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('3ttp://frog.com').isNone(), 'malformed protocol should not be registered');
    assert.isTrue(Ex.getProtocol('httpsimple.com').isNone(), 'no protocal should be found');
    assert.isTrue(Ex.getProtocol('http:/simple.com').isNone(), 'no protocal should be found');
  });

  it('toPositiveInteger', () => {
    // TODO: write a few test cases
    assert.isTrue(Ex.toPositiveInteger(1).equals(Optional.some(1)), 'Positive nunmber');
    assert.isTrue(Ex.toPositiveInteger(0).equals(Optional.none()), 'Zero');
    assert.isTrue(Ex.toPositiveInteger(-4).equals(Optional.none()), 'Negative number');
  });

  it('isString', () => {
    assert.isTrue(Ex.isString('a new string').equals(Optional.some('a new string')), 'Non empty string');
    assert.isTrue(Ex.isString('0').equals(Optional.some('0')), '0 as string');
    assert.isTrue(Ex.isString('').equals(Optional.none()), 'Empty string');
  });

  it('getNextSibling', () => {
    const element = document.createElement('div');
    const child1 = document.createElement('p');
    element.appendChild(child1);
    element.appendChild(document.createElement('span'));
    assert.isTrue(Ex.getNextSibling(element).equals(Optional.none()), 'element with no sibling');
    assert.isTrue(Ex.getNextSibling(child1).equals(Optional.some(element.childNodes[1])), 'there is a sibling')
  });

  it('getElementAttributes', () => {
    const element = document.createElement('div');
    element.setAttribute('id', 'element1');
    element.setAttribute('class', 'css-1');
    assert.isTrue(Ex.getElementAttribute(element, 'id').equals(Optional.some(element.getAttributeNode('id') as Attr)), 'A valid attribute');
    assert.isTrue(Ex.getElementAttribute(element, 'class').equals(Optional.some(element.getAttributeNode('class') as Attr)), 'Another valid attribute');
    assert.isTrue(Ex.getElementAttribute(element, 'invalid').equals(Optional.none()), 'Attribute does not exist');
  });

  it('doubleNumber', () => {
    assert.equal(Ex.doubleNumber(Optional.some(4)), 8, 'a number');
    assert.equal(Ex.doubleNumber(Optional.some(0)), 0, 'some(0)');
    assert.equal(Ex.doubleNumber(Optional.none()), 0, 'none');
  });

  it('toValueOr', () => {
    assert.deepEqual(Ex.toValueOr(Optional.some({age: 9})), {age: 9}, 'A valid value');
    assert.deepEqual(Ex.toValueOr(Optional.none()), {age: 0}, 'Optional.none() as input');
  });

  it('toValueOrWithFold', () => {
    assert.deepEqual(Ex.toValueOrWithFold(Optional.some({age: 9})), {age: 9}, 'A valid value');
    assert.deepEqual(Ex.toValueOrWithFold(Optional.none()), {age: 0}, 'Optional.none() as input');
  });

  it('optionalToArray', () => {
    assert.deepEqual(Ex.optionalToArray(Optional.some(10)), [10], 'A number');
    assert.deepEqual(Ex.optionalToArray(Optional.some({age: 11})), [{age: 11}], 'An object');
    assert.deepEqual(Ex.optionalToArray(Optional.none()), [], 'empty array');
  });

  it('arrayToOptional', () => {
    assert.isTrue(Ex.arrayToOptional([]).equals(Optional.none()), 'should get Optional.none()');
    assert.isTrue(Ex.arrayToOptional([200]).equals(Optional.some(200)), 'should get Optional.some(200)');
    assert.isTrue(Ex.arrayToOptional([300, 200]).equals(Optional.some(300)), 'should only take the first element');
  });

  it('add3', () => {
    assert.isTrue(Ex.add3(Optional.some(10)).equals(Optional.some(13)), 'should be 13');
    assert.isTrue(Ex.add3(Optional.some(7)).equals(Optional.some(10)), 'should be 10');
    assert.isTrue(Ex.add3(Optional.none()).equals(Optional.none()), 'should be none');
  });

  it('prefixHello', () => {
    assert.isTrue(Ex.prefixHello(Optional.some('Mike')).equals(Optional.some('hello Mike')), 'should be hello Mike');
    assert.isTrue(Ex.prefixHello(Optional.some('Tammy')).equals(Optional.some('hello Tammy')), 'should be hello Tammy');
    assert.isTrue(Ex.prefixHello(Optional.none()).equals(Optional.none()), 'should be none');
  });
});

// TODO: Now that you have finished all the test files in this directory,
// try running all tests in the 'part2' folder all using the `-d` argument in bedrock and specifying the parent directory.
