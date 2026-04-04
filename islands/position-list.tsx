interface Props {
  positions: string[];
}

export default function PositionList({ positions }: Props) {
  return (
    <div class="grid grid-cols-2 gap-2">
      {positions.map((p, i) => (
        <img key={i} src={atob(p)} class="rounded mx-auto block" alt={`姿势 ${i + 1}`} />
      ))}
    </div>
  );
}
