export const Article = ({ article: { id, topic, text } }) => {
  return (
    <article key={id}>
      <h2>{topic}</h2>
      <p>{text}</p>
    </article>
  );
};
