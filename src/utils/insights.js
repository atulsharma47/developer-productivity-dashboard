export function generateInsights(metrics, previousMetrics) {
  let insights = [];
  let suggestions = [];

  // 🔹 Helper to avoid duplicate type insights
  const hasInsight = (keyword) =>
    insights.some(i => i.toLowerCase().includes(keyword));

  // 🔹 Thresholds to avoid noise
  const CYCLE_THRESHOLD = 0.3;
  const LEAD_THRESHOLD = 0.3;
  const BUG_THRESHOLD = 5; // percentage points

  // ===============================
  // 🔹 1. Month-over-month comparison
  // ===============================
  if (previousMetrics) {
    const cycleDiff = metrics.cycleTime - previousMetrics.cycleTime;
    const leadDiff = metrics.leadTime - previousMetrics.leadTime;
    const bugDiff = metrics.bugRate - previousMetrics.bugRate;

    // 🔴 Negative trends (only if significant)
    if (cycleDiff > CYCLE_THRESHOLD) {
      insights.push("Cycle time increased compared to last month");
      suggestions.push("Investigate why tasks are taking longer.");
    }

    if (bugDiff > BUG_THRESHOLD) {
      insights.push("Bug rate increased, indicating declining code quality");
      suggestions.push("Improve testing and code review practices.");
    }

    if (leadDiff > LEAD_THRESHOLD) {
      insights.push("Lead time increased, slowing delivery to production");
      suggestions.push("Check for delays in reviews or deployment pipeline.");
    }

    // 🟢 Improvements (only if significant)
    if (cycleDiff < -CYCLE_THRESHOLD && !hasInsight("cycle time")) {
      insights.push("Cycle time improved compared to last month");
    }

    if (bugDiff < -BUG_THRESHOLD && !hasInsight("bug")) {
      insights.push("Bug rate decreased, indicating improved code quality");
    }

    if (leadDiff < -LEAD_THRESHOLD && !hasInsight("lead time")) {
      insights.push("Lead time decreased, improving delivery speed");
    }
  }

  // ===============================
  // 🔹 2. Current health checks
  // ===============================
  if (metrics.cycleTime > 5 && !hasInsight("cycle time")) {
    insights.push("Cycle time is higher than expected");
    suggestions.push("Break work into smaller, manageable tasks.");
  }

  if (metrics.bugRate > 30 && !hasInsight("bug")) {
    insights.push("High bug rate detected");
    suggestions.push("Increase test coverage and validate edge cases.");
  }

  if (metrics.leadTime > 3.5 && !hasInsight("lead time")) {
    insights.push("Lead time is relatively high");
    suggestions.push("Reduce PR size or speed up code reviews.");
  }

  // ===============================
  // 🔹 3. Clean empty values
  // ===============================
  insights = insights.filter(i => i && i.trim() !== "");
  suggestions = suggestions.filter(s => s && s.trim() !== "");

  // ===============================
  // 🔹 4. Remove duplicates
  // ===============================
  insights = [...new Set(insights)];
  suggestions = [...new Set(suggestions)];

  // ===============================
  // 🔹 5. Healthy fallback
  // ===============================
  if (insights.length === 0) {
    insights.push("All metrics are stable and within a healthy range");
    suggestions.push("Continue current development practices.");
  }

  return {
    insights,
    suggestions
  };
}