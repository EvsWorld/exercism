// Live coding interview for TS company

// write a function that combines two arrays
// objects with the same id should be merged
const first = [
  {
    id: "1001",
    firstName: "Michael",
    lastName: "Scott",
    title: "Regional Manager",
  },
  {
    id: "1002",
    email: "dwight@dundermifflin.com",
    title: "Assistant to the Regional Manager",
  },
  { id: "1003", email: "jim@dundermifflin.com", title: "Sales Representative" },
  { id: "1004", firstName: "Pam", lastName: "Beesly", title: "Receptionist" },
];

const second = [
  {
    id: "1003",
    firstName: "Jim",
    lastName: "Halpert",
    title: "Regional Co-Manager",
  },
  { id: "1002", firstName: "Dwight", lastName: "Schrute" },
  {
    id: "1004",
    firstName: "Pam",
    lastName: "Halpert",
    title: "Office Manager",
  },
  {
    id: "1001",
    email: "michael@dundermifflin.com",
    title: "Regional Co-Manager",
  },
  {
    id: "1005",
    email: "five@emailfive.com",
    title: "Regional five manageer",
  },
];
const stringify = (obj) => JSON.stringify(obj, null, 2);

// my first solution
const merge = (f, s) => {
  const r = f.map((e) => {
    const obj = s.find((se) => {
      return se.id == e.id;
    });
    const robj = { ...e, ...obj };
    // console.log("obj :>> ", obj);
    // console.log("robj :>> ", robj);
    return robj;
  });
  // console.log("r :>> ", JSON.stringify(r, 0, 2));
  return r;
};

// merge(first, second);

// Then they added the requirement that the ids in the two arrays might not be
// the same
//  I abandoned this attempt. Doesn't work.
// const merge2 = (f, s) => {
//   const allArrays = [...first, ...second];
//   const final = [];
//   allArrays.forEach((e) => {
//     const added = [];
//     let temp = {};
//     if (!added.includes(e.id)) {
//       console.log("not added: e :>> ", e);
//       added.push(e.id);
//       temp = e;
//     } else {
//       console.log(" added: e :>> ", e);
//       temp = { ...temp, e };
//       const found = final.find((o) => o.id == e.id);
//     }
//     console.log("temp :>> ", temp);
//     final.push(temp);
//   });
//   return final;
// };

// Second attempt for solution to none identical arrays requirement
const merge3 = (f, s) => {
  const allArrays = [...f, ...s];
  const final = [];
  const added = [];
  allArrays.forEach((e, i) => {
    if (!added.includes(e.id)) {
      const slice = allArrays.slice(i + 1);
      const found = slice.find((j) => j.id === e.id);
      added.push(e.id);
      if (found) {
        const toPush = { ...e, ...found };
        final.push(toPush);
      } else {
        final.push(e);
      }
    }
  });
  return final;
};

// After the interview I found this on stackoverflow
const merge4 = (f, s) => {
  const result = Object.values(
    [...f, ...s].reduce((result, { id, ...rest }) => {
      result[id] = {
        ...(result[id] || {}),
        id,
        ...rest,
      };
      return result;
    }, {})
  );

  // console.log(JSON.stringify(result, null, 2));
  return result;
};

const output = merge3(first, second);
console.log("output :>> ", JSON.stringify(output, 0, 2));
