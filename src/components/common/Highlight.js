export default function Highlight({
  text = 'Highlight text',
  className = 'text-primary',
}) {
  return <span className={className}>{text}</span>;
}
