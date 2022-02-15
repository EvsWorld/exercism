type Nucleotide = "G" | "C" | "A" | "T";
export function toRna(dna: string) {
  const trans: { [Nucleotide: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return dna
    .split("")
    .map((d) => {
      if (!["G", "C", "T", "A"].includes(d)) {
        throw new Error("Invalid input DNA.");
      }
      return trans[d];
    })
    .join("");
}
