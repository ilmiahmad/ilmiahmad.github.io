import type { Entry } from "@/data/resume";

export default function EntryItem({ entry }: { entry: Entry }) {
  return (
    <article className="entry">
      <div className="row">
        <p className="entry-title">
          <strong>{entry.title}</strong>
          {entry.suffix}
        </p>
        {entry.date && <span className="date">{entry.date}</span>}
      </div>
      {entry.role && <p className="role">{entry.role}</p>}
      <ul>
        {entry.bullets.map((text, i) => {
          const link = entry.bulletLinks?.[i];
          return (
            <li key={i}>
              {text}
              {link && (
                <>
                  {" "}
                  <a href={link.href}>{link.label}</a>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
