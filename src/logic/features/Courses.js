import { Course } from "../model/Course.js";
import { FIELD } from "../refs/field.js";
import { query } from "../utils/utils.js";

export class Courses {
  constructor() {
    this._cache = [];
  }

  init = async (url) => {
    const result = await query(url);
    result.forEach(course => {
      const { code, coursename, 
        progression } = course;
      this._cache.push(new Course(
        code, coursename, progression));
    });
  }

  sortBy = (field) => {
    const result = [...this._cache]
      .sort((a, b) => {
      if(a[field] < b[field])
        return -1;
      else if(a[field] > b[field])
        return 1;
      else return 0;
    });
    console.log('result', result);
    console.log(this._cache)
  }

  filterBy = (input) => {
    const result = this._cache
      .filter((course) => {
      if(course[FIELD.CODE]
        .includes(input)
        || course[FIELD.COURSENAME]
        .includes(input))
        return course;
    });
    console.log(result)
    console.log(this._cache);
  }
}