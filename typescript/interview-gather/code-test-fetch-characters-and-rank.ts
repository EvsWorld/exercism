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

const fetchPosts = (name: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
  try {
    const returnedPromises = await Promise.allSettled(arrayOfPromises);

    // // Another possible approach
    // // resolved/fulfilled Promises' values
    // const fulfilled = returnedPromises
    //   .filter((result) => result.status === "fulfilled")
    //   .map((result) => result?.value);
    // console.log(fulfilled); // [{name: "John Doe", dateAccountCreated: "05-23-2018"}]

    // // rejected Promises' reasons
    // const rejected = returnedPromises
    //   .filter((result) => result.status === "rejected")
    //   .map((result) => result?.reason);
    // console.log(rejected); // ['failed to fetch']

    // loop over and designate status
    returnedPromises.forEach((char) => {
      let httpResponse = char?.reason?.response?.status || char?.value?.status;
      console.log("httpResponse :>> ", httpResponse);
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
    return { valid, invalid, topValid };
  } catch (err) {
    console.error(err);
  }
};

getCharsAsync().then((result) => console.log("final result :>> ", result));
