export function toRna(dna: string) {
  const trans: { [key]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  const resArr: string[] = [];
  dna.split("").forEach((d) => {
    if (!["G", "C", "T", "A"].includes(d)) {
      throw new Error("Invalid input DNA.");
    }
    resArr.push(trans[d]);
  });
  return resArr.join("");
  // if (dna === "C") return "G";
}
