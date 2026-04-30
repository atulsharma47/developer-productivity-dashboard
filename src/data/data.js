export const jiraIssues = [
  // Noah (worsening)
  { developer_id: "DEV-002", month: "2026-03", cycle_time_days: 4.7 },
  { developer_id: "DEV-002", month: "2026-03", cycle_time_days: 4.7 },
  { developer_id: "DEV-002", month: "2026-04", cycle_time_days: 5.4 },
  { developer_id: "DEV-002", month: "2026-04", cycle_time_days: 5.4 },

  // Ava (stable)
  { developer_id: "DEV-001", month: "2026-03", cycle_time_days: 4.0 },
  { developer_id: "DEV-001", month: "2026-03", cycle_time_days: 4.0 },
  { developer_id: "DEV-001", month: "2026-04", cycle_time_days: 3.9 },
  { developer_id: "DEV-001", month: "2026-04", cycle_time_days: 3.9 },

  // Liam (consistent)
  { developer_id: "DEV-003", month: "2026-03", cycle_time_days: 4.2 },
  { developer_id: "DEV-003", month: "2026-03", cycle_time_days: 4.0 },
  { developer_id: "DEV-003", month: "2026-04", cycle_time_days: 4.1 },
  { developer_id: "DEV-003", month: "2026-04", cycle_time_days: 4.3 },

  // Sophia (improving)
  { developer_id: "DEV-004", month: "2026-03", cycle_time_days: 6.5 },
  { developer_id: "DEV-004", month: "2026-03", cycle_time_days: 6.0 },
  { developer_id: "DEV-004", month: "2026-04", cycle_time_days: 4.8 },
  { developer_id: "DEV-004", month: "2026-04", cycle_time_days: 4.5 }
];

export const deployments = [
  // Noah
  { developer_id: "DEV-002", month: "2026-03", lead_time_days: 3.2 },
  { developer_id: "DEV-002", month: "2026-03", lead_time_days: 3.2 },
  { developer_id: "DEV-002", month: "2026-04", lead_time_days: 3.8 },
  { developer_id: "DEV-002", month: "2026-04", lead_time_days: 3.8 },

  // Ava
  { developer_id: "DEV-001", month: "2026-03", lead_time_days: 2.8 },
  { developer_id: "DEV-001", month: "2026-03", lead_time_days: 2.8 },
  { developer_id: "DEV-001", month: "2026-04", lead_time_days: 3.0 },
  { developer_id: "DEV-001", month: "2026-04", lead_time_days: 3.2 },

  // Liam
  { developer_id: "DEV-003", month: "2026-03", lead_time_days: 3.0 },
  { developer_id: "DEV-003", month: "2026-03", lead_time_days: 3.1 },
  { developer_id: "DEV-003", month: "2026-04", lead_time_days: 3.2 },
  { developer_id: "DEV-003", month: "2026-04", lead_time_days: 3.0 },

  // Sophia
  { developer_id: "DEV-004", month: "2026-03", lead_time_days: 5.0 },
  { developer_id: "DEV-004", month: "2026-03", lead_time_days: 5.2 },
  { developer_id: "DEV-004", month: "2026-04", lead_time_days: 3.9 },
  { developer_id: "DEV-004", month: "2026-04", lead_time_days: 3.7 }
];

export const pullRequests = [
  // Noah
  { developer_id: "DEV-002", month: "2026-03" },
  { developer_id: "DEV-002", month: "2026-03" },
  { developer_id: "DEV-002", month: "2026-04" },
  { developer_id: "DEV-002", month: "2026-04" },

  // Ava
  { developer_id: "DEV-001", month: "2026-03" },
  { developer_id: "DEV-001", month: "2026-03" },
  { developer_id: "DEV-001", month: "2026-04" },
  { developer_id: "DEV-001", month: "2026-04" },

  // Liam
  { developer_id: "DEV-003", month: "2026-03" },
  { developer_id: "DEV-003", month: "2026-03" },
  { developer_id: "DEV-003", month: "2026-04" },
  { developer_id: "DEV-003", month: "2026-04" },

  // Sophia
  { developer_id: "DEV-004", month: "2026-03" },
  { developer_id: "DEV-004", month: "2026-03" },
  { developer_id: "DEV-004", month: "2026-04" },
  { developer_id: "DEV-004", month: "2026-04" }
];

export const bugs = [
  // Noah (worsening in April)  ➜ 2 escaped out of 3
  { developer_id: "DEV-002", month: "2026-04", escaped: true },
  { developer_id: "DEV-002", month: "2026-04", escaped: true },
  { developer_id: "DEV-002", month: "2026-04", escaped: false },

  { developer_id: "DEV-002", month: "2026-03", escaped: false },
  { developer_id: "DEV-002", month: "2026-03", escaped: false },

  // Ava (clean)
  { developer_id: "DEV-001", month: "2026-03", escaped: false },
  { developer_id: "DEV-001", month: "2026-03", escaped: false },
  { developer_id: "DEV-001", month: "2026-04", escaped: false },
  { developer_id: "DEV-001", month: "2026-04", escaped: false },

  // Liam (clean)
  { developer_id: "DEV-003", month: "2026-03", escaped: false },
  { developer_id: "DEV-003", month: "2026-03", escaped: false },
  { developer_id: "DEV-003", month: "2026-04", escaped: false },
  { developer_id: "DEV-003", month: "2026-04", escaped: false },

  // Sophia (improving)
  { developer_id: "DEV-004", month: "2026-03", escaped: true },
  { developer_id: "DEV-004", month: "2026-03", escaped: false },
  { developer_id: "DEV-004", month: "2026-04", escaped: false },
  { developer_id: "DEV-004", month: "2026-04", escaped: false }
];