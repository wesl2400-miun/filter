import { Courses } from "./logic/features/Courses.js";
import { FIELD } from "./logic/refs/field.js";
import { URL } from "./logic/refs/url.js";


const courses = new Courses();
await courses.init(URL.COURSES);
courses.filterBy('Gr')


