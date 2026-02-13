export default function SystemEvent({ text }) {
  return (
    <div className="flex justify-center px-4 py-3">
      <span className="rounded-full bg-wpp-input/80 px-4 py-1.5 text-center text-xs text-wpp-muted">
        {text}
      </span>
    </div>
  );
}
