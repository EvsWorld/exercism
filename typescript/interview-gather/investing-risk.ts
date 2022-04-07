// ************************** Types And Data *****************************

type Rule = {
  minThreshold: number;
  minScore: number;
  maxThreshold: number;
  maxScore: number;
  entities?: string[];
  categories?: string[];
};
interface MergedRules {
  entityRule: Rule | undefined;
  categoryRule: Rule | undefined;
}

type Source = { name: string; contribution: number; category: string };

const transactionAnalysisData: Source[] = [
  { name: "Agora", category: "Dark Market", contribution: 72 },
  { name: "Nucleus Market", category: "Dark Market", contribution: 76 },
];

const rulesArrayData: Rule[] = [
  {
    minThreshold: 46,
    minScore: 3,
    maxThreshold: 84,
    maxScore: 56,
    entities: ["Agora", "Nucleus Market", "Entity2"],
  },
  {
    minThreshold: 69,
    minScore: 2,
    maxThreshold: 88,
    maxScore: 13,
    // categories: ["Dark Market", "Another Category", "Some Category"],
  },
  {
    minThreshold: 37,
    minScore: 4,
    maxThreshold: 58,
    maxScore: 19,
  },
];
// ******************************** Functions *****************************

// Calculate rules by linear percentage contribution, and done as follows: If
// 1. the contribution of funds is less than the min threshold, then the rule
//    is not triggered;
// 2. If the contribution of funds equals the min threshold, then the min
//    score is applied;
// 3.  If the contribution of funds is equal to or greater than the max
//     threshold, then the max score is applied;
//
// So i need a function to apply these rules once I get the rules that do
// apply
//
// Example of Linear percentage contribution:
// For any percentage in between, the score assigned is on a linear scale
//  between the given min and max scores. For example, for a rule like:

// * Min threshold: 20, Min score: 1
// * Max threshold: 80, Max score: 7

// And this rule is triggered with a contribution of 50%, a score of 4 is assigned. All
// scores are rounded up to the nearest integer.
// score = minScore + ( (contribution - minThreshold ) * ( maxScore - minScore ) / (maxThreshold - minThreshold) )
// score =    1     + ( (     50      -     20       ) * (   7      -    1     ) / (     80      -     20      ) )

const getMergedScore = (
  mergedRules: MergedRules,
  contribution: number
): number => {
  const { entityRule, categoryRule } = mergedRules;
  let mergedScore = 0;
  if (entityRule && categoryRule) {
    const entityScore = getScoreFromRule(entityRule, contribution);
    const categoryScore = getScoreFromRule(categoryRule, contribution);
    mergedScore = (entityScore + categoryScore) / 2;
  } else if (entityRule) {
    const entityScore = getScoreFromRule(entityRule, contribution);
    mergedScore = entityScore;
  } else if (categoryRule) {
    const categoryScore = getScoreFromRule(categoryRule, contribution);
    mergedScore = categoryScore;
  } else {
    mergedScore = 0;
  }

  return mergedScore;
};

const getScoreFromRule = (rule: Rule, contribution: number): number => {
  let score: number = 0;
  const { minThreshold, minScore, maxThreshold, maxScore } = rule;
  if (contribution > minThreshold || !rule) {
    // trigger rule
    if (contribution === minThreshold) {
      // apply min score
      score = minScore;
      console.log("Using minThreshold.  Score = ", score);
    } else if (contribution >= maxThreshold) {
      // apply max score
      score = maxScore;
      console.log("Using maxThreshold.  Score = ", score);
    } else {
      // assign score with linear interpolation
      score =
        minScore +
        ((contribution - minThreshold) * (maxScore - minScore)) /
          (maxThreshold - minThreshold);
      score = Number(score.toFixed(0));
      console.log("calculating linear score. Score = ", score);
    }
  } else {
    // TODO: delete this else
    console.log(
      `Minimum threshold not met for contribution: ${contribution}. Not applying rule`
    );
  }
  console.log(`Score for contribution: ${contribution} = ${score}`);
  return score;
};

const getRuleForSource = (source: Source, rulesArray: Rule[]) => {
  // TODO: merge rules from category with rules from entity. Market superceeds.
  // const categoryRule = rulesByCategory[source.category];
  // const entityRule = rulesByEntity[source.name];
  const categoryRule = rulesArray.find((rule) => {
    return rule.categories ? rule.categories.includes(source.category) : false;
  });

  const entityRule = rulesArray.find((rule) => {
    return rule.entities ? rule.entities.includes(source.name) : false;
  });
  console.log("categoryRule :>> ", categoryRule);
  console.log("entityRule :>> ", entityRule);
  // category superceeds bc its last
  // TODO: find better way to guard against possible undefined values
  const mergedRules: MergedRules = { entityRule, categoryRule };
  // const mergedRules: Rule = {
  //   minThreshold: entityRule?.minThreshold,
  //   minScore: entityRule?.minScore,
  //   maxThreshold: entityRule?.maxThreshold,
  //   maxScore: entityRule?.maxScore,
  //   entities: entityRule?.entities,
  //   categories: entityRule?.categories
  // }
  console.log("mergedRules :>> ", mergedRules);
  return mergedRules;
};

// *************************** Solution ***********************************

// Each rule is evaluated only if funds have been contributed from matching
// categories/entities. Business logic for multiple matching rules is
// *unspecified*
//
// ASSUMPTION:  I think this means that i only need to find one rule set to
// apply to a given transaction
//
// TODO: We are evaluating a transaction analysis. This is a list of entities
// and their contributions. Each Source will get a score calculated for it.
export const investingRisk = (
  transactionAnalysis: Source[],
  rulesArray: Rule[]
) => {
  // TODO: iterate over complete transaction analysis
  // *  for each source:
  //     * find rule(s) because of entity
  //     * find rule(s) because of category
  //     * Choose which rule to apply (or how to combine or handle this).
  //       (Category rules overrides I think.)
  //     * Calculate score based on rule and contribution
  //     * Add score to total (for transaction analysis array)
  //  Done?
  //
  let totalScore: number = 0;
  transactionAnalysis.forEach((source) => {
    const effectiveRulesForSource = getRuleForSource(source, rulesArray);
    const scoreForSource = getMergedScore(
      effectiveRulesForSource,
      source.contribution
    );
    totalScore += scoreForSource;
  });
  return totalScore;
};

console.log(investingRisk(transactionAnalysisData, rulesArrayData));
