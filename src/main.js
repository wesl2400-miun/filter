import { Courses } from "./logic/features/Courses.js";
import { URL } from "./logic/refs/url.js";
import { NODE_ID } from "./ui/refs/node-id.js";
import { CourTable } from "./ui/units/CourTable.js";
import { node } from "./ui/utils.js/utils.js";


const courses = new Courses();
await courses.init(URL.COURSES);

const table = node(NODE_ID.TABLE);
const searchBar = node(NODE_ID.SEARCH);

new CourTable(table, searchBar, courses);





