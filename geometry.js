/**
 * Class representing a Rectangle
 */
class Rectangle {
  /**
   * Create a Rectangle.
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   */
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  /**
   * determines if the rectangle is a square
   * @return {boolean} true if the rectangle is a square
   */
  isSquare() {
    
  }

  /**
   * calculates the area of the rectangle
   * @return {number} the area of the rectangle
   */
  area() {}

  /**
   * calculates the perimeter of the rectangle.
   * @returns {number} the perimeter of the rectangle
   */
  perimeter() {}
}

/**
 * Class representing a Triangle
 */
class Triangle {
  /**
   * Create a Triangle.
   * @param {number} sideA - The length of side A.
   * @param {number} sideB - The length of side B.
   * @param {number} sideC - The length of side C.
   */
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  /**
   * @returns {boolean} true if the triangle is equilateral
   * @see http://en.wikipedia.org/wiki/Equilateral_triangle
   */
  isEquilateral() {}

  /**
   * @returns {boolean} true if the triangle is isosceles
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides
   */
  isIsosceles() {}

  /**
   * @returns {boolean} true if the triangle is obtuse
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles
   */
  isObtuse() {}

  /**
   * calculates the area of the Triangle
   * @returns {number} the area of the Triangle
   * @see http://en.wikipedia.org/wiki/Heron%27s_formula
   */
  area() {}
}

/**
 * Class representing a Line Segment
 */
class LineSegment {
  /**
   * Create a Line Segment.
   * @param {{x: number, y: number}} start - the start position of the line.
   * @param {{x: number, y: number}} end - the end position of the line.
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  /**
   * calculates the length of the (start.x, start.y) --> (end.x, end.y)
   * @returns {number} the length of the line segment
   * @see http://en.wikipedia.org/wiki/Pythagorean_theorem
   */
  length() {}
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle,
  Triangle,
  LineSegment,
};
