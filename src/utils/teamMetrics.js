export function calculateTeamMetrics(month, data) {
  // ✅ Get all developers dynamically
  const devs = [...new Set(data.jiraIssues.map(d => d.developer_id))];

  const devStats = devs.map(devId => {
    const issues = data.jiraIssues.filter(
      i => i.developer_id === devId && i.month === month
    );

    const deployments = data.deployments.filter(
      d => d.developer_id === devId && d.month === month
    );

    const bugs = data.bugs.filter(
      b => b.developer_id === devId && b.month === month
    );

    const avgCycle =
      issues.length > 0
        ? issues.reduce((sum, i) => sum + i.cycle_time_days, 0) / issues.length
        : 0;

    const avgLead =
      deployments.length > 0
        ? deployments.reduce((sum, d) => sum + d.lead_time_days, 0) / deployments.length
        : 0;

    const bugRate =
      bugs.length > 0
        ? bugs.filter(b => b.escaped).length / bugs.length
        : 0;

    return {
      devId,
      avgCycle,
      avgLead,
      bugRate,
      totalBugs: bugs.length,
      escapedBugs: bugs.filter(b => b.escaped).length
    };
  });

  // ✅ Correct "no risk" logic
  const allZeroBugRate = devStats.every(d => d.bugRate === 0);

  const riskyDev = allZeroBugRate
    ? null
    : devStats.reduce((max, dev) =>
        dev.bugRate > max.bugRate ? dev : max
      ).devId;

  // ✅ FIX: Weighted team bug rate (IMPORTANT)
  const totalBugs = devStats.reduce((sum, d) => sum + d.totalBugs, 0);
  const totalEscaped = devStats.reduce((sum, d) => sum + d.escapedBugs, 0);

  const avgBugRate =
    totalBugs > 0 ? totalEscaped / totalBugs : 0;

  return {
    avgCycle:
      devStats.reduce((sum, d) => sum + d.avgCycle, 0) / devStats.length,

    avgLead:
      devStats.reduce((sum, d) => sum + d.avgLead, 0) / devStats.length,

    avgBugRate, // ✅ corrected

    riskyDev
  };
}