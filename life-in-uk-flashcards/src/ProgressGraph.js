import React from 'react';

// Simple SVG line chart showing last N results
// No external dependencies — pure SVG
const ProgressGraph = ({ results, maxResults = 5, height = 120, width = 280 }) => {
    if (!results || results.length < 2) return null;

    const recent = results.slice(-maxResults);
    const scores = recent.map(r => r.score);
    const minScore = Math.max(0, Math.min(...scores) - 10);
    const maxScore = Math.min(100, Math.max(...scores) + 10);
    const range = maxScore - minScore || 50;

    const padding = { top: 10, bottom: 20, left: 30, right: 10 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const points = recent.map((r, idx) => {
        const x = padding.left + (idx / (recent.length - 1)) * chartW;
        const y = padding.top + chartH - ((r.score - minScore) / range) * chartH;
        return `${x},${y}`;
    });

    const polylinePoints = points.join(' ');

    // Y-axis labels
    const yLabels = [minScore, Math.round((minScore + maxScore) / 2), maxScore];

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ maxWidth: width }}>
            {/* Grid lines */}
            {yLabels.map((label, idx) => {
                const y = padding.top + chartH - ((label - minScore) / range) * chartH;
                return (
                    <g key={idx}>
                        <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                        <text x={padding.left - 5} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af">{label}%</text>
                    </g>
                );
            })}

            {/* Line */}
            <polyline
                fill="none"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                points={polylinePoints}
            />

            {/* Dots */}
            {recent.map((r, idx) => {
                const [x, y] = points[idx].split(',').map(Number);
                const isBest = r.score === Math.max(...scores);
                return (
                    <g key={idx}>
                        <circle cx={x} cy={y} r={isBest ? 5 : 3.5} fill={isBest ? '#22c55e' : '#6366f1'} stroke="white" strokeWidth="1.5" />
                        {/* X-axis label */}
                        <text x={x} y={height - 5} textAnchor="middle" fontSize="8" fill="#9ca3af">
                            {new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                        </text>
                    </g>
                );
            })}

            {/* Trend arrow */}
            {recent.length >= 2 && (() => {
                const last = recent[recent.length - 1].score;
                const prev = recent[recent.length - 2].score;
                const isUp = last > prev;
                return (
                    <text x={width - padding.right} y={padding.top + 12} textAnchor="end" fontSize="11" fill={isUp ? '#22c55e' : '#ef4444'}>
                        {isUp ? '↑' : '↓'}
                    </text>
                );
            })()}
        </svg>
    );
};

export default ProgressGraph;
