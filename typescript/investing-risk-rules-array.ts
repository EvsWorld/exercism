// list of contributions that describes sources of funds
// each contribution has entity object associated
// the percentages dont add up to 100

// ************************** Types And Data *****************************

type Rule = {
  minThreshold: number;
  minScore: number;
  maxThreshold: number;
  maxScore: number;
  entities?: string[];
  categories?: string[];
};

type Entity = { name: string; contribution: number; category?: string };

type TransactionAnalysis = Entity[];

interface CompleteTransactionAnalysis extends TransactionAnalysis {
  category: string;
}
const transactionAnalysis: TransactionAnalysis = [
  { name: "Agora", contribution: 45 },
  { name: "Nucleus Market", contribution: 76 },
];

const categoriesAndEntities: { [category: string]: string[] } = {
  "Dark Market": ["Agora", "Nucleus Market"],
  "White Market": ["Coinbase", "Entity1"],
  "Category B": ["Entity2", "Entity3"],
};

const rulesArray: Rule[] = [
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

const getScoreFromRule = (rule: Rule, contribution: number): number => {
  let score: number = 0;
  const { minThreshold, minScore, maxThreshold, maxScore } = rule;
  if (contribution > minThreshold) {
    // trigger rule
    if (contribution === minThreshold) {
      // apply min score
      score = minScore;
    } else if (contribution >= maxThreshold) {
      // apply max score
      score = maxScore;
    } else {
      // assign score based on linear scale
      score =
        minScore +
        ((contribution - minThreshold) * (maxScore - minScore)) /
          (maxThreshold - minThreshold);
    }
  } else {
    // dont apply rule
  }
  // do what with the score for this rule here? Add it to what?
  return score;
};

const getCategory = (entity: Entity) => {
  const results: string[] = [];
  for (const category in categoriesAndEntities) {
    const entitiesArray = categoriesAndEntities[category];
    // console.log(`${category}: ${categoriesAndEntities[category]}`);
    if (entitiesArray.includes(entity.name)) {
      results.push(category);
    }
  }
  return results[0];
};

// TODO: reduce transactionAnalysis to include the category too
const getCompleteTransactionAnalysis = (transactionAnalysisLocal) => {
  return transactionAnalysisLocal.reduce((acc, cur) => {
    const category = getCategory(cur);
    const obj = { ...cur, category };
    acc.push(obj);
    return acc;
  }, []);
};

const getRuleForSource = (entity: Entity) => {
  // TODO: merge rules from category with rules from entity. Market superceeds.
  const categories = getCategory(entity);
  const category = categories[0];
  // const categoryRule = getCategoryRule(categories[0]);
  // iterate over rulesArray to get categoryRule or entityRule
  // const categoryRule = rulesByCategory[category];
  const categoryRule = rulesArray.find((rule) => {
    if (rule.categories) {
      return rule.categories.includes(entity.category);
    } else {
      return false;
    }
  });

  // const entityRule = rulesByEntity[entity.name];
  const entityRule = rulesArray.find((rule) => {
    if (rule.entities) {
      return rule.entities.includes(entity.name);
    } else {
      return false;
    }
  });
  console.log("categoryRule :>> ", categoryRule);
  console.log("entityRule :>> ", entityRule);
  // category superceeds bc its last
  const mergedRules = { ...entityRule, ...categoryRule };
  console.log("mergedRules :>> ", mergedRules);
  return mergedRules;
};

// *************************** Solution *********************************** Each
// rule is evaluated only if funds have been contributed from matching
// categories/entities business logic for multiple matching rules is
// *unspecified*
//
// ASSUMPTION:  I think this means that i only need to find one rule set to
// apply to a given transaction
//
// TODO: We are evaluating a transaction analysis. This is a list of entities
// and their contributions. Each entity will get a score calculated for it.
export const investingRisk = (transactionAnalysis: TransactionAnalysis) => {
  // ? what to do if there are overlapping rules? which should supercede? Probably the market

  const completeTransactionAnalysis =
    getCompleteTransactionAnalysis(transactionAnalysis);
  console.log("completeTransactionAnalysis :>> ", completeTransactionAnalysis);

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
  completeTransactionAnalysis.forEach((source) => {
    const effectiveRuleForSource = getRuleForSource(source);
    // get score
    const score = getScoreFromRule(effectiveRuleForSource, source.contribution);
    totalScore += score;
  });
  return totalScore;
};

console.log(investingRisk(transactionAnalysis));

// ****************************** Unused ************************************
const calcScoreByIteratingOverRulesArray = (
  rulesArrayLocal,
  completeTransactionAnalysisLocal
) => {
  let scoreCount: number = 0;
  rulesArrayLocal.forEach((rule) => {
    // console.log("rule :>> ", rule);
    let contribution: number | null = null;
    // get entity if the rule matched by entity
    const entityForEntityRule = completeTransactionAnalysisLocal.find((tr) => {
      if (rule.entities) {
        return rule.entities.includes(tr.name);
      } else {
        return false;
      }
    });
    console.log("entityForEntityRule :>> ", entityForEntityRule);

    // get entity if it matches by category
    const entityForCategoryRule = completeTransactionAnalysisLocal.find(
      (tr) => {
        if (rule.categories) {
          return rule.categories.includes(tr.category);
        } else {
          return false;
        }
      }
    );
    console.log("entityForCategoryRule :>> ", entityForCategoryRule);

    if (entityForCategoryRule) {
      contribution = entityForCategoryRule.contribution;
      const score = getScoreFromRule(rule, contribution);
      scoreCount += score;
    } else if (entityForEntityRule) {
      contribution = entityForEntityRule.contribution;
      const score = getScoreFromRule(rule, contribution);
      scoreCount += score;
    }
    // here choose whether to use the calculate score based on rule for
    // assign to scoreCount somehow
  });
};
