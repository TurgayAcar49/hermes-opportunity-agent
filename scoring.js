function calculateOpportunityScore(cluster) {
  let frequencyScore = Math.min(cluster.mentions * 2, 30);
  let engagementScore = Math.min(cluster.avg_upvotes, 20);
  let frustrationScore = cluster.frustration === "high" ? 20 : 10;
  let paymentScore = cluster.payment_intent_score;

  return frequencyScore + engagementScore + frustrationScore + paymentScore;
}

module.exports = { calculateOpportunityScore };
