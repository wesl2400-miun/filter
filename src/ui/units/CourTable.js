import { FIELD } from "../../logic/refs/field";
import { CONTENT } from "../data/content";
import { STYLE } from "../refs/style";
import { newNode } from "../utils.js/utils";

export class CourTable {
  constructor(parent, 
    searchBar, courses) {
    const root = newNode('table', 
      null, STYLE.TABLE, parent);
    this._courses = courses;
    this._initSearch(searchBar);
    this._addHeaders(root);
    this._cells = newNode(
      'div', null, null, root);
    this._update(this._courses.get());
  }

  _initSearch = (searchBar) => {
    searchBar.addEventListener('input', () => {
      const courses = 
        this._courses
        .filterBy(searchBar.value);
      this._update(courses);
    });
  }

  _update = (courses) => {
    this._cells.innerHTML = '';
    courses.forEach(
      course => {
      this._addCell(course);
    })
  }

  _addCell = (course) => {
    const cell = newNode('tr', 
      null, null, this._cells);
    const { code, coursename, 
      progression } = course;
    newNode('td', code,
       null, cell);
    newNode('td', coursename, 
      null, cell);
    newNode('td', progression, 
      null, cell);
  }

  _addHeaders = (root) => {
    const headers = newNode(
      'tr', null, null, root);
    this._addHeader(headers, 
      CONTENT.TABLE.HEAD1,
      FIELD.CODE);
    this._addHeader(headers, 
      CONTENT.TABLE.HEAD2,
      FIELD.COURSENAME);
    this._addHeader(headers, 
      CONTENT.TABLE.HEAD3,
        FIELD.PROGRESSION);
  }

  _addHeader = (parent, 
    title, field) => {
    const header = newNode('th', 
      title, null, parent);
    header.addEventListener(
      'click', () => {
      const courses =
        this._courses.sortBy(field);
      this._update(courses);
    })
  }
}