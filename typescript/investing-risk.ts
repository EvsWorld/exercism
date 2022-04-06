export const investingRisk = (a: number[]) => {
  // list of contributions that describes sources of funds
  // each contribution has entity object associated
  // the percentages dont add up to 100

  type Entity = { name: string; contribution: number };
  type TransactionAnalysis = Entity[];
  const transactionAnalysis: TransactionAnalysis = [
    { name: "Agora", contribution: 45 },
    { name: "Nucleus Market", contribution: 76 },
  ];

  type Rule = {
    minThreshold: number;
    minScore: number;
    maxThreshold: number;
    maxScore: number;
  };

  interface TransactionWRules {
    entityName: string;
    category: string;
    rules: Rule[];
    contribution: number;
  }
  // risk rules: list of entities OR categories, used to match name and category
  // of the transacton contributions
  // ? Maybe there will be a list of risk rules by entity AND one by category
  // NOTE: There might not  be rules for every entity or category
  const rulesByEntity: { [name: string]: Rule } = {
    Agora: { minThreshold: 20, minScore: 1, maxThreshold: 80, maxScore: 7 },
    "Nucleus Market": {
      minThreshold: 98,
      minScore: 41,
      maxThreshold: 28,
      maxScore: 73,
    },
    Entity1: { minThreshold: 42, minScore: 12, maxThreshold: 83, maxScore: 88 },
    Entity2: { minThreshold: 74, minScore: 12, maxThreshold: 99, maxScore: 62 },
    Entity3: { minThreshold: 15, minScore: 72, maxThreshold: 43, maxScore: 22 },
  };
  const rulesByCategory: { [category: string]: Rule } = {
    "Dark Market": {
      minThreshold: 22,
      minScore: 4,
      maxThreshold: 62,
      maxScore: 1,
    },
    "White Market": {
      minThreshold: 13,
      minScore: 18,
      maxThreshold: 54,
      maxScore: 73,
    },
    Coinbase: { minThreshold: 17, minScore: 48, maxThreshold: 20, maxScore: 1 },
    "Category B": {
      minThreshold: 13,
      minScore: 56,
      maxThreshold: 84,
      maxScore: 1,
    },
  };

  // Maybe there is another dictionary with categories and the entities that belong to that category?
  const categoriesAndEntities: { [category: string]: string[] } = {
    "Dark Market": ["Agora", "Nucleus Market"],
    "White Market": ["Coinbase", "Entity1"],
    "Category B": ["Entity2", "Entity3"],
  };
  //Once we know which risk rules match the contributions, we can then calculate
  // the score How to find what rules apply to each transaction Start with the
  // transaction. It has the entity name and percentage
  // * from entity name, get rule for entity from riskRulesByEntity from entity
  //   name, get its category from categoriesAndEntities
  // * from entities category, get rule from riskRulesByCategory
  //

  // Returns all the categories that the entity is found in
  const getCategory = (entity: Entity) => {
    const results: string[] = [];
    for (const category in categoriesAndEntities) {
      const entitiesArray = categoriesAndEntities[category];
      console.log(`${category}: ${categoriesAndEntities[category]}`);
      if (entitiesArray.includes(entity.name)) {
        results.push(category);
      }
    }
    return results;
  };

  // ? what to do if there are overlapping rules? which should supercede? Probably the market
  const getRulesForEntity = (entity: Entity) => {
    // TODO: merge rules from category with rules from entity. Market superceeds.
    const categories = getCategory(entity);
    const category = categories[0];
    // const categoryRule = getCategoryRule(categories[0]);
    const categoryRule = rulesByCategory[category];
    const entityRule = rulesByEntity[entity.name];
    console.log("categoryRule :>> ", categoryRule);
    console.log("entityRule :>> ", entityRule);
    const mergedRules = { ...entityRule, ...categoryRule };
    console.log("mergedRules :>> ", mergedRules);
    return mergedRules;
  };

  //
  // Each rule is evaluated only if funds have been contributed from matching
  // categories/entities business logic for multiple matching rules is
  // *unspecified*
  //
  // ASSUMPTION:  I think this means that i only need to find one rule set to
  // apply to a given transaction
  //
  // TODO: We are evaluating a transaction analysis. This is a list of entities and their contributions. Each entity will get a score calculated for it.
  // Need to:
  // * loop over many transactions
  // * find category for the entity
  // * find the rules for the entity, and rules for category,
  // * merge rules for given entity, with category rules superceeding
  // * send that to the score calc function
  //

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

  const getScoreFromRules = ({
    entityName,
    category,
    rules,
    contribution,
  }: TransactionWRules): number => {
    let finalScore: number = 0;
    // Loop over each rule and apply this logic
    rules.forEach((rule) => {
      const { minThreshold, minScore, maxThreshold, maxScore } = rule;
      let scoreFromOneRule: number = 0;
      if (contribution > minThreshold) {
        // trigger rule
        if (contribution === minThreshold) {
          // apply min score
          scoreFromOneRule = minScore;
        } else if (contribution >= maxThreshold) {
          // apply max score
          scoreFromOneRule = maxScore;
        } else {
          // assign score based on linear scale
          scoreFromOneRule =
            minScore +
            ((contribution - minThreshold) * (maxScore - minScore)) /
              (maxThreshold - minThreshold);
        }
      } else {
        // dont apply rule
      }
      // do what with the score for this rule here? Add it to what?
      finalScore += scoreFromOneRule;
    });
    return finalScore;
  };
};
