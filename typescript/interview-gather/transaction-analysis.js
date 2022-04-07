const rules = [
  {
    id: "4e4e0e8c-5705-407e-9aa9-17822482260b",
    name: "Gavin",
    entities: ["Gavin Andresen Faucet"],
    rule_criteria: {
      type: "linear_percentage_contribution",
      min_contribution_threshold: 20,
      max_contribution_threshold: 80,
      min_score: 3,
      max_score: 6,
    },
  },
  {
    id: "da8623ed-92ee-47e0-81ab-280e12ea8918",
    name: "Agora",
    entities: ["Agora"],
    rule_criteria: {
      type: "linear_percentage_contribution",
      min_contribution_threshold: 0,
      max_contribution_threshold: 100,
      min_score: 8,
      max_score: 10,
    },
  },
  {
    id: "5a341097-814f-4b82-bd2a-59f358ed4c26",
    name: "Dark Markets",
    categories: ["Dark Market"],
    rule_criteria: {
      type: "linear_percentage_contribution",
      min_contribution_threshold: 0,
      max_contribution_threshold: 60,
      min_score: 5,
      max_score: 9,
    },
  },
  {
    id: "5b85b190-bea9-42f9-b65a-9f7136cc9e65",
    name: "Exchange",
    categories: ["Exchange"],
    rule_criteria: {
      type: "linear_percentage_contribution",
      min_contribution_threshold: 20,
      max_contribution_threshold: 100,
      min_score: 2,
      max_score: 6,
    },
  },
];

const transaction_analyses = {
  c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457: {
    subject: {
      hash: "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457",
      output_address: "37ijgvhMvAyGNd5y89N6vLdDHsAP7ZFcZd",
    },
    type: "deposit",
    contributions: [
      {
        entity: {
          name: "Alphabay",
          category: "Dark Market",
        },
        pct_contribution: 100,
      },
    ],
  },
  dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1: {
    subject: {
      hash: "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1",
      output_address: "1BQEjCKoLq8YTJ7LDT9CeCSeVmhehsfJuC",
    },
    type: "deposit",
    contributions: [
      {
        entity: {
          name: "Gavin Andresen Faucet",
          category: "Bitcoin Faucet",
        },
        pct_contribution: 8.503402,
      },
    ],
  },
  efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174: {
    subject: {
      hash: "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174",
      output_address: "1Dtn8vtRVFDdmGDcqa1uuAz4igsNNPvTeU",
    },
    type: "deposit",
    contributions: [
      {
        entity: {
          name: "Agora",
          category: "Dark Market",
        },
        pct_contribution: 77.39488,
      },
      {
        entity: {
          name: "Nucleus Market",
          category: "Dark Market",
        },
        pct_contribution: 12.263823,
      },
    ],
  },
  cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792: {
    subject: {
      hash: "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792",
      output_address: "1JYshmPZR8jyuGCzTbt2ksjpJADbgmBHbJ",
    },
    type: "deposit",
    contributions: [
      {
        entity: {
          name: "Kraken",
          category: "Exchange",
        },
        pct_contribution: 56.39774,
      },
      {
        entity: {
          name: "Bitstamp",
          category: "Exchange",
        },
        pct_contribution: 42.589287,
      },
    ],
  },
};

const getRuleForSource = (source, rulesArray) => {
  // TODO: merge rules from category with rules from entity. Market superceeds.
  console.log("source :>> ", source);
  const categoryRule = rulesArray.find((rule) => {
    console.log("rule :>> ", rule);
    return rule.categories
      ? rule.categories.includes(source.entity.category)
      : false;
  });

  const entityRule = rulesArray.find((rule) => {
    return rule.entities ? rule.entities.includes(source.entity.name) : false;
  });
  console.log("categoryRule :>> ", categoryRule);
  console.log("entityRule :>> ", entityRule);
  // category superceeds bc its last
  // TODO: find better way to guard against possible undefined values
  const mergedRules = { entityRule, categoryRule };
  console.log("mergedRules :>> ", mergedRules);
  return mergedRules;
};

const getMergedScore = (mergedRules, contribution) => {
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

const getScoreFromRule = (rule, contribution) => {
  let score = 0;
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

function solution(tx_hash) {
  const analysis = transaction_analyses[tx_hash];
  // console.log("analysis :>> ", JSON.stringify(analysis, null, 2));
  // console.log(
  //   "contributions :>> ",
  //   JSON.stringify(analysis.contributions, null, 2)
  // );
  analysis.contributions.forEach((source) => {
    console.log("source :>> ", source);
    const effectiveRulesForSource = getRuleForSource(source, rules);
    const scoreForSource = getMergedScore(
      effectiveRulesForSource,
      source.pct_contribution
    );
  });
  // Implement your solution here

  return calculated_score;
}
solution("cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792");
