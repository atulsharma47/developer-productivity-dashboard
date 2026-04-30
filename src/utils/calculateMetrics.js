export function calculateMetrics(devId, month, data) {
  const issues = data.jiraIssues.filter(
    i => i.developer_id === devId && i.month === month
  );

  const prs = data.pullRequests.filter(
    p => p.developer_id === devId && p.month === month
  );

  const deploys = data.deployments.filter(
    d => d.developer_id === devId && d.month === month
  );

  const bugs = data.bugs.filter(
    b => b.developer_id === devId && b.month === month && b.escaped
  );

  return {
    cycleTime:
      issues.reduce((a, b) => a + b.cycle_time_days, 0) /
      (issues.length || 1),

    leadTime:
      deploys.reduce((a, b) => a + b.lead_time_days, 0) /
      (deploys.length || 1),

    prCount: prs.length,
    deploymentCount: deploys.length,

    bugRate: bugs.length / (issues.length || 1)
  };
}