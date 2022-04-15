const { pipe } = require("ramda");

interface Task {
  assignedTo: string;
  dueDate: string;
  name: string;
  blocked: boolean;
  complete: boolean;
}

interface Report {
  [key: string]: {}[] | Task[];
}
const tasks: Task[] = [
  {
    assignedTo: "John Doe",
    dueDate: "2019-08-31",
    name: "Add drag and drop component",
    blocked: false,
    complete: false,
  },
  {
    assignedTo: "Bob Smith",
    dueDate: "2019-08-29",
    name: "Fix build issues",
    blocked: false,
    complete: false,
  },
  {
    assignedTo: "David Riley",
    dueDate: "2019-09-03",
    name: "Upgrade webpack",
    blocked: true,
    complete: false,
  },
  {
    assignedTo: "John Doe",
    dueDate: "2019-08-31",
    name: "Create new product endpoint",
    blocked: false,
    complete: false,
  },
];

// here are the individual functions, they haven't changed from the above,
// just including them so you can see their implementation
const getIncomplete = (tasks: Task[]) => {
  return tasks.filter(({ complete }) => !complete);
};
const log = (tasks: Task[]) => {
  console.log("tasks :>> ", tasks);
  return tasks;
};
const getNonBlocked = (tasks: Task[]) =>
  tasks.filter(({ blocked }) => !blocked);

const sortByDueDate = (tasks: Task[]) =>
  tasks.sort(
    (a, b) => new Date(a.dueDate).valueOf() - new Date(b.dueDate).valueOf()
  );

const groupBy = (key: string) => (array: Task[]) => {
  return array.reduce((objectsByKeyValue: Report, obj: Task): Report => {
    const value = obj[key as keyof Task];
    objectsByKeyValue[value as keyof Report] = (
      objectsByKeyValue[value as keyof Report] || []
    ).concat(obj);
    return objectsByKeyValue;
  }, {});
};

const groupByAssignee = groupBy("assignedTo");

// this is the magic
export const getIterationReport = pipe(
  getIncomplete,
  getNonBlocked,
  sortByDueDate,
  // log,
  groupByAssignee
);

const report = getIterationReport(tasks);
console.log("report :>> ", JSON.stringify(report, null, 2));
