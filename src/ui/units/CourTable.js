import { FIELD } from "../../logic/refs/field";
import { CONTENT } from "../data/content";
import { STYLE } from "../refs/style";
import { newNode } from "../utils.js/utils";

// Vyn för tabellen
export class CourTable {

  constructor(parent, 
    searchBar, courses) {
    const root = newNode('table', 
      null, STYLE.TABLE, parent);
    this._courses = courses;
    this._initSearch(searchBar);
    this._addHeaders(root);
    this._dataCells = newNode(
      'div', null, STYLE.VHOLDER, root);
    this._update(this._courses.get());
  }

  // Tilldela sökfältet en händelse
  _initSearch = (searchBar) => {
    searchBar.addEventListener('input', () => {
      const courses = 
        this._courses
        .filterBy(searchBar.value);
      this._update(courses);
    });
  }

  // Uppdatera tabellens dataceller
  _update = (courses) => {
    this._dataCells
      .innerHTML = '';
    courses.forEach(
      course => {
      this._addCell(course);
    })
  }

  // Lägg till en cell
  _addCell = (course) => {
    const cell = newNode('tr', 
      null, STYLE.CELLS, 
      this._dataCells);
    const { code, coursename, 
      progression } = course;
    newNode('td', code,
       STYLE.CELL, cell);
    newNode('td', coursename, 
      STYLE.CELL, cell);
    newNode('td', progression, 
      STYLE.CELL, cell);
  }

  // Lägg till rubriker
  _addHeaders = (root) => {
    const headers = newNode('tr',
      null, STYLE.CELLS, root);
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

  // Gör rubriker interaktiva
  _addHeader = (parent, 
    title, field) => {
    const header = newNode('th', 
      title, STYLE.CELL, parent);
    header.addEventListener(
      'click', () => {
      const courses =
        this._courses.sortBy(field);
      this._update(courses);
    })
  }
}