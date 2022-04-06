# Investing Risk Challenge

## Background

At our company we’ve been iterating on a bespoke technical challenge for several years; we’ve found it difficult to come up with an interesting and relevant challenge for our candidates.
Most coding tests we come across are either search or algorithm questions that don’t directly evaluate the skills we need in our business, or domain specific problems that take several hours to complete.
We’re optimising for the best use of your time, in a scenario that not only demonstrates that you have what it takes to work with us, but also gives you a realistic view into the work you’ll be contributing to here.
Our challenge is an hour long - you can’t take more time! The two main areas we’re assessing in the challenge are your interpretation of the business requirements and how you’ve used your time. We’ll also be looking at your coding style etc, but we are very realistic about what can be done in an hour.
Provided you get a sufficient amount of the challenge completed, we’ll have a session to follow up and discuss your solution. We’re interested in what you might have done given more time, and what might be required to productionise your code.
Instructions for completing the challenge

1. Overleaf is the description of the tech challenge. This is available in codility, but we suggest familiarising yourself with it and the concepts ahead of time. As soon as you see it in codility the clock will be counting down!
2. We use codility as our technical testing platform. It’s a browser based IDE. Most candidates feel more comfortable in their preferred editor, pasting from there into codility is completely fine (just don’t lose track of time!)
3. There are tests that you can run in codility - these are the same set of tests that are run on our side to check your code, so you can check how you’ve done at any point in the hour
4. Keep a copy of your code so you can refresh yourself before our follow-up call, and to help that subsequent session go more smoothly. If you forget to do this, reach out to us and we can send it over!

## Tech Challenge Context

At our company, we help customers identify whether the transactions they submit to us are risky or not according to their risk rules. For example, if a submitted transaction has 100% of its funds coming from Coinbase it would generally be treated as a low risk, whereas a transaction with funds coming from a terrorist organisation would be treated as high risk.

Each transaction analysis will give you a list of contributions that describes the sources of the funds transacted. Each of those contributions will have an entity object associated, which will contain the name and category of that Entity. You'll also have the percentage contribution of those funds by that Entity. The contribution percentages don't necessarily add to 100% every time.

The Risk Rules are a way for the customers to define what risk looks like to them. They are static for this test, but they are often tweaked and adjusted by our customers as they go. The rules will have either a list of entities or categories, which are used to match name and category of the transaction contributions. Once we know which risk rules match the contributions, we can then calculate the score. More details on how this is done are described below.

For example, if we look into the 3rd transaction from the list given on the test, we have contributions from Agora and Nucleus Market, and both of them belong to the Dark Market category. Looking through the given risk rules, we have a rule for the Agora entity and a rule for the Dark Market category. Both of these rules apply to this transaction, and it is up to you to understand the business needs and make a judgement on what the final score should be in this case.

### Risk Calculation

Each rule is evaluated only if funds have been contributed from matching categories/entities. The business logic around multiple matching rules is unspecified.
All rules in this challenge are of type linear_percentage_contribution and so should be calculated as follows:

- If the contribution of funds is less than the min threshold, then the rule is not triggered;
- If the contribution of funds equals the min threshold, then the min score is applied;
- If the contribution of funds is equal to or greater than the max threshold, then the max
  score is applied;

For any percentage in between, the score assigned is on a linear scale\* between the given min and max scores.
For example, if a rule has the following properties:

- Min threshold: 20, Min score: 1
- Max threshold: 80, Max score: 7

And this rule is triggered with a contribution of 50%, a score of 4 is assigned. All scores are rounded up to the nearest integer.
