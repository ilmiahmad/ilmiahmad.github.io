import type { Entry } from "@/data/resume";

export default function EntryItem({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <div className="row">
        <p>
          <strong>{entry.title}</strong>
          {entry.suffix}
        </p>
        {entry.link ? (
          <a className="date" href={entry.link.href}>
            {entry.link.label}
          </a>
        ) : (
          entry.date && <span className="date">{entry.date}</span>
        )}
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
    </div>
  );
}
