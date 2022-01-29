import { returnAnObject, multiplyAllByTwo } from './public/js/functionsToTest';

describe('La fonction returnAnObject ', () => {
  test('devrait retourner un objet quand on lui donne l\'argument objet  ', () => {
    expect(returnAnObject(1, true, "2")).toEqual({0:1, 1: true, 2:"2"});
  });

  test('devrait retourner No argument was given to the function.', () => {
    expect(returnAnObject()).toBe('No argument was given to the function.');
  });
});

describe('La fonction multiplyAllByTwo...', () => {
  test('devrait retourner [number] quand on lui donne l\'argument [number] ', () => {
    expect(multiplyAllByTwo([2, 3])).toEqual([4, 6]);
  });

  test('devrait retourner The argument is not an Array of numbers sin on lui passe rien', () => {
    expect(multiplyAllByTwo()).toBe('The argument is not an Array of numbers');
  });
});
