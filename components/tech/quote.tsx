import { tech } from './content';

export function TechQuote() {
  const { lines, author } = tech.quote;

  return (
    <blockquote className="tech__quote">
      <p>
        <span className="tech__quote-mark">&ldquo;</span>
        {lines.map((line) => (
          <span key={line} className="tech__quote-line">
            {line}
            <br />
          </span>
        ))}
        <span className="tech__quote-author">— {author}</span>
      </p>
    </blockquote>
  );
}
