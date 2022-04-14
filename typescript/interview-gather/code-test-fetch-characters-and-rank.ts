// PokeTool Inc is developing a new tool named “PokeAnalyzer”, which is used for
// evaluating a list of Pokémon, validating if they exist and comparing those by
// base experience.  The tool leverages the public API https://pokeapi.co, which
// returns all the information regarding all the existing Pokémon. Here’s a
// subset of the API JSON response: GET
// https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}

// {
//     "base_experience": number,
//     "id": number,
//     "name": string,
//   ...
// }

// Input You are given a file containing a list of Pokémon names to analyze. The
// names are already in the format expected by PokeAPI.  You can find it in the
// “Files” section of this CoderPad: the file can be sourced in your code from
// the path /home/coderpad/data/list.txt.  Expected Output Using the programming
// language of your choice, write a script that given the input file, prints in
// the console:

// The top 3 Pokémon by base experience (base_experience field in the API
// response), from the highest to the lowest; The list of invalid Pokémon
// included in the input; The list of invalid Pokémon doesn’t need to follow any
// specific order;

// Example Input
// pikachu
// diglett
// batman
// ditto
// psyduck
// superman
// charizard
// banana

// Example Output
// Top 3:
// - Charizard 240
// - Pikachu 112
// - Ditto 101

// Invalid:
// - Superman
// - Batman
// - Banana

// **************************** Solution **********************************
const _ = require("lodash");
var fs = require("fs");
const axios = require("axios");

// const characters = fs.readFileSync("/home/coderpad/data/list.txt", "utf8");
// const charArray = characters.split(/\r?\n/);
const charArray = [
  // existing
  "pikachu",
  "diglett",
  "squirtle",
  "ditto",
  "psyduck",
  "charizard",
  "ekans",
  "rattata",
  "bulbasaur",
  "mew",

  // nonexistant
  "batman",
  "superman",
  "banana",
  "rambo",
  "pizza",
];

const fetchPosts = async (name: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // .then((result: any) => {
  //   return result;
  // })
  // .catch((err: Error) => {
  //   throw err;
  // });
};
interface ValidCharacter {
  name: string;
  baseExperience: number;
}
export const getCharsAsync = async () => {
  let topValid: ValidCharacter[] = [];
  const invalid: string[] = [];
  const valid: ValidCharacter[] = [];

  const arrayOfPromises = charArray.map((name) => {
    const postPromise = fetchPosts(name);
    return postPromise;
  });
  const returnedPromises = await Promise.allSettled(arrayOfPromises);

  // loop over and designate status
  returnedPromises.forEach((char) => {
    let httpResponse = char?.reason?.response.status || char?.value?.status;
    // console.log("httpResponse :>> ", httpResponse);
    // if (char.status === "fulfilled") {
    if (httpResponse === 200) {
      valid.push({
        name: char?.value?.data?.name,
        baseExperience: char?.value?.data?.base_experience,
      });
    }
    if (httpResponse === 404) {
      invalid.push(char?.reason?.config?.url);
    }
  });

  console.log("valid: ", valid);
  console.log("invalid: ", invalid);
  topValid = valid
    .sort(function (a, b) {
      return b.baseExperience - a.baseExperience;
    })
    .slice(0, 3);
  console.log("topValid = ", topValid);
  console.log("returnedPromises :>> ", returnedPromises);
};

getCharsAsync();

// ************************* Other approaches ******************************
// try {
//   var characters = fs.readFileSync("/home/coderpad/data/list.txt", "utf8");
//   // console.log(data.toString());
//   const charArray = characters.split(/\r?\n/);
//   const charPromises = charArray.map(
//     (name) =>
//       new Promise((resolve) => {
//         const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
//         request(
//           url,
//           {
//             json: true,
//           },
//           (err, res) => {
//             if (err) {
//               return reject(err);
//             }
//             resolve(res.body);
//           }
//         );
//       })
//   );
//   Promise.all(charPromises).then((results) => {
//     console.log(results);
//   });
// } catch (e) {
//   console.log("Error:", e.stack);
// }

// ****************************************************************
// try {
// var characters = fs.readFileSync("/home/coderpad/data/list.txt", "utf8");
// // console.log(data.toString());
// const charArray = [
//   // 'pikachu',
//   // 'diglett',
//   // 'squirtle',
//   "batman",
//   // 'ditto',
//   // 'psyduck',
//   "superman",
//   "charizard",
//   "banana",
//   "ekans",
//   "rattata",
//   "pizza",
//   "rambo",
//   "bulbasaur",
//   "mew",
// ];
//   const charArray = characters.split(/\r?\n/)

// const fetchPosts = async (name) => {
//   try {
//     const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     return data;
//   } catch (error) {
//     // console.log(error.response.data);
//     return error.response;
//   }
// };

// const invalid = [];
// const valid = [];
// const promises = charArray.map(
//   (name) =>
//     new Promise((resolve) => {
//       axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${name}`,
//         {
//           json: true,
//         },
//         (err, res) => {
//           // if (err) {

//           //   invalid.push(resolve(res.body));
//           // }
//           valid.push(resolve(res.body));
//         }
//       );
//     })
// );
// Promise.all([valid, invalid]).then((results) => {
//   console.log("results = ", results);
// });

// ****************************************************************
// const getCharsAsync = async () => {
//   const invalid = [];
//   const valid = [];

// charArray.forEach(async (name) => {
// const post = await fetchPosts(name);
// console.log('name = ', name)
// console.log('post.statusText = ', post.statusText)
// console.log('post.data = ', post.data.base_experience)

// const post = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
// if (post.statusText === "Not Found") {
//   invalid.push(name);
// } else {
//   // console.log( `Asynchronous ${post.data.base_experience} is fetched for ${name}`);
//   valid.push(name);
// }
// console.log('valid: ', valid)
// console.log('invalid: ', invalid)
//   });
//   console.log("Start Async");
//   console.log("valid: ", valid);
//   console.log("invalid: ", invalid);

//   const [validData, invalidData] = await Promise.all([valid, invalid]);

//   console.log("valid: ", validData);
//   console.log("invalid: ", invalidData);
//   // return  await {valid, invalid}
// };

//  getCharsAsync()
//  getCharsAsync().then(res => {
//  console.log('res = ', res)
//  });
// console.log( 'charsNow = ', charsNow)

// } catch(e) {
//     console.log('Error:', e.stack);
// }

// ****************************************************************
