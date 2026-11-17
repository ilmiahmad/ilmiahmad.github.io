"use client";

import { useState } from "react";
import type { Project } from "@/data/resume";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <ul className="projects">
      {projects.map((p, i) => {
        const expanded = open.has(i);
        const panelId = `project-${i}`;
        return (
          <li key={p.title} className="project" data-open={expanded}>
            <button
              type="button"
              className="project-head"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span className="project-title">
                <strong>{p.title}</strong>
                {p.suffix}
              </span>
              {p.date && <span className="date">{p.date}</span>}
              <span className="project-blurb">{p.blurb}</span>
              <span className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </span>
            </button>
            <div id={panelId} className="project-panel" hidden={!expanded}>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {p.link && (
                <p className="project-link">
                  <a href={p.link.href}>{p.link.label}</a>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
