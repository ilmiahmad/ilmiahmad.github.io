import { profile } from "@/data/resume";
import SystolicHero from "./SystolicHero";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="photo"
          src={profile.photo}
          alt={`Photo of ${profile.name}`}
          width={72}
          height={72}
        />
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="summary">{profile.summary}</p>
        <p className="links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
          <a href={profile.github.href}>{profile.github.label}</a>
          <a href={profile.pdf} download>
            Download resume (PDF)
          </a>
        </p>
      </div>
      <figure className="hero-array">
        <SystolicHero />
        <figcaption>
          {profile.heroCaption} <a href={profile.heroLink.href}>{profile.heroLink.label}</a>
        </figcaption>
      </figure>
    </header>
  );
}
