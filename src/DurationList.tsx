export default function DurationList() {
  const durationLinks = [
    {
      duration: 'Daily',
      href: '#',
      selected: false,
    },
    {
      duration: 'Weekly',
      href: '#',
      selected: true,
    },
    {
      duration: 'Monthly',
      href: '#',
      selected: false,
    },
  ];
  return (
    <nav>
      {durationLinks.map(({ duration, href, selected }) => (
        <a href={href}>{duration}</a>
      ))}
    </nav>
  );
}
