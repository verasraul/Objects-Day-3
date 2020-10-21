/* eslint-env mocha */
const mocha = require('mocha');
const { expect } = require('chai');
const { Rectangle, Triangle, LineSegment } = require('../geometry');


/* RECTANGLE */
describe('Rectangle', () => {
  it('should be a class', () => {
    expect(Rectangle).to.be.a('Function');
  });

  it('should be an instance of Rectangle', () => {
    expect(new Rectangle()).to.be.an.instanceof(Rectangle);
  });

  it('should have the correct properties', () => {
    expect(new Rectangle()).to.have.all.keys(['length', 'width']);
  });

  it('should have the correct methods', () => {
    const rectangle = new Rectangle();
    expect(rectangle).to.respondTo('area');
    expect(rectangle).to.respondTo('isSquare');
    expect(rectangle).to.respondTo('perimeter');
  });

  describe('#isSquare()', () => {
    it('should check for a square', () => {
      // ARRANGE
      const expected = true;

      // ACT
      const actual = new Rectangle(3, 3).isSquare();

      // ASSERT
      expect(actual).to.equal(expected);
    });

    it('should identify a non-square', () => {
      // ARRANGE
      const expected = false;

      // ACT
      const actual = new Rectangle(3, 4).isSquare();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });

  describe('#area()', () => {
    it('should calculate area', () => {
      // ARRANGE
      const expected = 9;

      // ACT
      const actual = new Rectangle(3, 3).area();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });

  describe('#perimeter()', () => {
    it('finds the perimeter', () => {
      // ARRANGE
      const expected = 10;

      // ACT
      const actual = new Rectangle(2, 3).perimeter();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });
});


/* TRIANGLE */

describe('Triangle', () => {
  it('should be a class', () => {
    expect(Triangle).to.be.a('Function');
  });

  it('should be an instance of Triangle', () => {
    expect(new Triangle()).to.be.an.instanceof(Triangle);
  });

  it('should have the correct properties', () => {
    expect(new Triangle()).to.have.all.keys(['sideA', 'sideB', 'sideC']);
  });

  it('should have the correct methods', () => {
    const tri = new Triangle();
    expect(tri).to.respondTo('isEquilateral');
    expect(tri).to.respondTo('isIsosceles');
    expect(tri).to.respondTo('isObtuse');
    expect(tri).to.respondTo('area');
  });

  describe('#isEquilateral()', () => {
    it('should check for an equilateral', () => {
      // ARRANGE
      const expected = true;

      // ACT
      const actual = new Triangle(2, 2, 2).isEquilateral();

      // ASSERT
      expect(actual).to.equal(expected);
    });

    it('should check for non equilaterals', () => {
      // ARRANGE
      const expected = false;

      // ACT
      const actual = new Triangle(3, 4, 5).isEquilateral();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });

  describe('#isIsosceles()', () => {
    it('should check for an isosceles', () => {
      // ARRANGE
      const expected = true;

      // ACT
      const actual = new Triangle(3, 5, 3).isIsosceles();

      // ASSERT
      expect(actual).to.equal(expected);
    });

    it('should check for a non isosceles', () => {
      // ARRANGE
      const expected = false;

      // ACT
      const actual = new Triangle(3, 5, 4).isIsosceles();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });

  describe('#area()', () => {
    it('should calculate the area', () => {
      // ARRANGE
      const expected = 6;

      // ACT
      const actual = new Triangle(3, 5, 4).area();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });

  describe('#isObtuse()', () => {
    it('should determine obtuse', () => {
      // ARRANGE
      const expected = true;

      // ACT
      const actual = new Triangle(2, 3, 4).isObtuse();

      // ASSERT
      expect(actual).to.equal(expected);
    });

    it('should detect a non-obtuse', () => {
      // ARRANGE
      const expected = false;

      // ACT
      const actual = new Triangle(9, 40, 43).isObtuse();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });
});

describe('LineSegment', () => {
  it('should be a class', () => {
    expect(LineSegment).to.be.a('Function');
  });

  it('should be an instance of LineSegment', () => {
    expect(new LineSegment()).to.be.an.instanceof(LineSegment);
  });

  it('should have the correct properties', () => {
    expect(new LineSegment()).to.have.all.keys(['start', 'end']);
  });

  it('should have the correct methods', () => {
    const ls = new LineSegment();
    expect(ls).to.respondTo('length');
  });

  describe('#length()', () => {
    it('should calculate the length of a line', () => {
      // ARRANGE
      const expected = 5;
      const start = { x: 2, y: 1 };
      const end = { x: 6, y: 6 };

      // ACT
      const actual = new LineSegment(start, end).length();

      // ASSERT
      expect(actual).to.equal(expected);
    });
  });
});