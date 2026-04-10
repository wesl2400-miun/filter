import { Course } from "../model/Course.js";
import { FIELD } from "../refs/field.js";
import { match, query } from "../utils/utils.js";

// Inkapslar logiken för appens kursfunktionalitet
export class Courses {
  constructor() {
    this._cache = [];
  }

  // Hämta kurser från en URL asynkront
  init = async (url) => {
    const result = await query(url);
    result.forEach(course => {
      const { code, coursename, 
        progression } = course;
      this._cache.push(new Course(
        code, coursename, progression));
    });
  }

  // Sortera kurser efter kategori
  sortBy = (field) => {
    const result = [...this._cache]
      .sort((a, b) => {
      if(a[field] < b[field])
        return -1;
      else if(a[field] > b[field])
        return 1;
      else return 0;
    });
    return result;
  }

  // Filtrera kurser efter en angiven sträng
  filterBy = (input) => {
    const result = [...this._cache]
      .filter((course) => {
      const codeMatch = match(
        course[FIELD.CODE], input);
      const nameMatch = match(
        course[FIELD.COURSENAME], 
        input);
      if(codeMatch || nameMatch)
        return course;
    });
    return result;
  }

  // Hämta den omodifierade listav av kurser
  get = () => this._cache;
}