import { timeline } from "@/data/resume";

const FIRST_YEAR = 2021;
const LAST_YEAR = 2026;

function monthIndex(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return (y - FIRST_YEAR) * 12 + (m - 1);
}

/** Shows how roles and study overlapped. The list below holds the same information as text. */
export default function ExperienceTimeline() {
  const total = (LAST_YEAR - FIRST_YEAR + 1) * 12;
  const now = new Date();
  const nowIndex = (now.getFullYear() - FIRST_YEAR) * 12 + now.getMonth() + 1;
  const years = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);

  return (
    <div className="timeline" aria-hidden="true">
      <div className="timeline-row timeline-years">
        <span />
        <div className="timeline-track">
          {years.map((y) => (
            <span key={y} style={{ left: `${(((y - FIRST_YEAR) * 12) / total) * 100}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>
      {timeline.map((t) => {
        const start = monthIndex(t.start);
        const end = t.end ? monthIndex(t.end) + 1 : Math.min(nowIndex, total);
        return (
          <div key={t.label} className="timeline-row">
            <span className="timeline-label">{t.label}</span>
            <div className="timeline-track">
              <div
                className={`timeline-bar ${t.kind}${t.end ? "" : " current"}`}
                style={{ left: `${(start / total) * 100}%`, width: `${((end - start) / total) * 100}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
