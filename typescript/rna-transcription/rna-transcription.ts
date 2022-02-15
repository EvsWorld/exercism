type Nucleotide = "G" | "C" | "A" | "T";
export function toRna(dna: string) {
  const trans: { [Nucleotide: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return [...dna].reduce((acc: string, d: string) => {
    if (!Object.keys(trans).includes(d)) {
      throw new Error("Invalid input DNA.");
    }
    acc += trans[d];
    return acc;
  }, "");
}
