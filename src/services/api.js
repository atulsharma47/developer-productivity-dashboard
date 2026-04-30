import {
  jiraIssues,
  deployments,
  pullRequests,
  bugs
} from "../data/data";

// simulate API delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchMetrics = async (developerId, month) => {
  await delay(300); // simulate network

  const issues = jiraIssues.filter(
    (i) => i.developer_id === developerId && i.month === month
  );

  const deploys = deployments.filter(
    (d) => d.developer_id === developerId && d.month === month
  );

  const prs = pullRequests.filter(
    (p) => p.developer_id === developerId && p.month === month
  );

  const bugList = bugs.filter(
    (b) => b.developer_id === developerId && b.month === month
  );

  const cycleTime =
    issues.length > 0
      ? (
          issues.reduce((sum, i) => sum + i.cycle_time_days, 0) /
          issues.length
        ).toFixed(1)
      : 0;

  const leadTime =
    deploys.length > 0
      ? (
          deploys.reduce((sum, d) => sum + d.lead_time_days, 0) /
          deploys.length
        ).toFixed(1)
      : 0;

  const bugRate =
    bugList.length > 0
      ? (
          (bugList.filter((b) => b.escaped).length / bugList.length) *
          100
        ).toFixed(1)
      : 0;

  return {
    cycleTime: Number(cycleTime),
    leadTime: Number(leadTime),
    prs: prs.length,
    deployments: deploys.length,
    bugRate: Number(bugRate)
  };
};