// import { investingRisk } from "./investing-risk";
import { investingRisk } from "./investing-risk";

type Rule = {
  minThreshold: number;
  minScore: number;
  maxThreshold: number;
  maxScore: number;
  entities?: string[];
  categories?: string[];
};

type Source = { name: string; contribution: number; category: string };

describe("Calculates score for transaction analysis and rule set", () => {
  it("Rule set has one rule with categories array and another rule with entities array and categories are the same for both sources", () => {
    const transactionAnalysisData: Source[] = [
      { name: "Agora", category: "Dark Market", contribution: 45 },
      { name: "Nucleus Market", category: "Dark Market", contribution: 76 },
    ];

    const rulesArrayData: Rule[] = [
      {
        minThreshold: 46,
        minScore: 56,
        maxThreshold: 84,
        maxScore: 1,
        entities: ["Agora", "Nucleus Market", "Entity2"],
      },
      {
        minThreshold: 69,
        minScore: 2,
        maxThreshold: 88,
        maxScore: 13,
        categories: ["Dark Market", "Another Category", "Some Category"],
      },
      {
        minThreshold: 37,
        minScore: 4,
        maxThreshold: 58,
        maxScore: 19,
      },
    ];
    expect(investingRisk(transactionAnalysisData, rulesArrayData)).toEqual(6);
  });
});
