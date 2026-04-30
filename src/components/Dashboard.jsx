import { useState, useEffect } from "react";
import { generateInsights } from "../utils/insights";
import { calculateTeamMetrics } from "../utils/teamMetrics";

import { fetchMetrics } from "../services/api";

import {
  jiraIssues,
  deployments,
  pullRequests,
  bugs
} from "../data/data";

import {
  FaBug,
  FaCodeBranch,
  FaRocket,
  FaClock
} from "react-icons/fa";

// ✅ UPDATED DEV NAMES
const devNames = {
  "DEV-001": "Ava Chen",
  "DEV-002": "Noah Patel",
  "DEV-003": "Liam Brown",
  "DEV-004": "Sophia Garcia"
};

export default function Dashboard() {
  const [devId, setDevId] = useState("DEV-002");
  const [month, setMonth] = useState("2026-04");

  const [metrics, setMetrics] = useState({
    cycleTime: 0,
    leadTime: 0,
    prs: 0,
    deployments: 0,
    bugRate: 0
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchMetrics(devId, month);
      setMetrics(data);
      setLoading(false);
    };

    loadData();
  }, [devId, month]);

  const previousMonth = month === "2026-04" ? "2026-03" : null;

  const [previousMetrics, setPreviousMetrics] = useState(null);

  useEffect(() => {
    const loadPrev = async () => {
      if (!previousMonth) return;

      const data = await fetchMetrics(devId, previousMonth);
      setPreviousMetrics(data);
    };

    loadPrev();
  }, [devId, previousMonth]);

  const { insights, suggestions } = generateInsights(
    metrics,
    previousMetrics
  );

  const team = calculateTeamMetrics(month, {
    jiraIssues,
    deployments,
    pullRequests,
    bugs
  });

  const getPattern = () => {
    if (metrics.bugRate > 0) {
      return { text: "⚠️ Quality Risk", color: "#ef4444" };
    }
    if (metrics.cycleTime > 5) {
      return { text: "⏳ Slow Execution", color: "#f59e0b" };
    }
    return { text: "✅ Healthy Flow", color: "#22c55e" };
  };

  const pattern = getPattern();

  const metricCards = [
    {
      label: "Cycle Time",
      value: metrics.cycleTime.toFixed(1),
      icon: <FaClock />,
      color: "#6366f1"
    },
    {
      label: "Lead Time",
      value: metrics.leadTime.toFixed(1),
      icon: <FaClock />,
      color: "#0ea5e9"
    },
    {
      label: "PRs",
      value: metrics.prs,
      icon: <FaCodeBranch />,
      color: "#10b981"
    },
    {
      label: "Deployments",
      value: metrics.deployments,
      icon: <FaRocket />,
      color: "#f59e0b"
    },
    {
      label: "Bug Rate",
      value: metrics.bugRate.toFixed(1) + "%",
      icon: <FaBug />,
      color: "#ef4444"
    }
  ];

  const sectionStyle = {
    background: "white",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          marginBottom: "25px"
        }}>
          <h1>🚀 Developer Productivity Dashboard</h1>
          <p style={{ color: "#666" }}>
            Track performance, identify risks, and improve delivery
          </p>
        </div>

        {/* FILTERS */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
          <div>
            <label>Developer</label><br />
            <select value={devId} onChange={e => setDevId(e.target.value)}>
              <option value="DEV-001">Ava Chen</option>
              <option value="DEV-002">Noah Patel</option>
              <option value="DEV-003">Liam Brown</option> {/* ✅ NEW */}
              <option value="DEV-004">Sophia Garcia</option> {/* ✅ NEW */}
            </select>
          </div>

          <div>
            <label>Month</label><br />
            <select value={month} onChange={e => setMonth(e.target.value)}>
              <option value="2026-03">March 2026</option>
              <option value="2026-04">April 2026</option>
            </select>
          </div>
        </div>

        {/* CONTEXT */}
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Showing data for <b>{devNames[devId]}</b> in <b>{month}</b>
        </p>

        {/* METRICS */}
        <div style={{ ...sectionStyle, marginBottom: "20px" }}>
          <h2>📊 Metrics Overview</h2>

          {loading && <p style={{ color: "#888" }}>Loading metrics...</p>}

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px"
          }}>
            {metricCards.map((card, i) => (
              <div key={i} style={{
                padding: "18px",
                borderRadius: "14px",
                background: "white",
                borderTop: `4px solid ${card.color}`,
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
              }}>
                <div style={{ color: card.color }}>{card.icon}</div>
                <p style={{ color: "#666" }}>{card.label}</p>
                <h2>{card.value}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM SUMMARY */}
        <div style={{ ...sectionStyle, marginBottom: "20px" }}>
          <h2>👥 Manager Summary</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px"
          }}>
            <div>
              <p style={{ color: "#666" }}>Avg Cycle Time</p>
              <h3>{team.avgCycle.toFixed(1)} days</h3>
            </div>

            <div>
              <p style={{ color: "#666" }}>Avg Lead Time</p>
              <h3>{team.avgLead.toFixed(1)} days</h3>
            </div>

            <div>
              <p style={{ color: "#666" }}>Team Bug Rate</p>
              <h3>{(team.avgBugRate * 100).toFixed(1)}%</h3>
            </div>

            <div>
              <p style={{ color: "#666" }}>
                {team.riskyDev ? "⚠️ Risky Developer" : "✅ Team Status"}
              </p>

              <h3>
                {team.riskyDev
                  ? devNames[team.riskyDev]
                  : "No major risks"}
              </h3>
            </div>
          </div>
        </div>

        {/* PATTERN */}
        <div style={{
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "20px",
          background: `${pattern.color}20`,
          border: `1px solid ${pattern.color}40`,
          color: pattern.color,
          fontWeight: "600"
        }}>
          {pattern.text}
        </div>

        {/* INSIGHTS */}
        <div style={{ ...sectionStyle, marginBottom: "20px" }}>
          <h2>📊 Insights</h2>

          {insights.length === 0 ? (
            <p>All metrics are stable.</p>
          ) : (
            insights.map((i, idx) => (
              <p key={idx}>• {i}</p>
            ))
          )}
        </div>

        {/* NEXT STEPS */}
        <div style={sectionStyle}>
          <h2>✅ Next Steps</h2>
          <ul>
            {suggestions.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}