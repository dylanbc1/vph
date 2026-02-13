export default function ChatHeader() {
  return (
    <header className="safe-top sticky top-0 z-10 flex items-center gap-3 bg-wpp-panel px-4 py-3 shadow-lg">
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-wpp-muted transition active:bg-white/10"
        aria-label="Atrás"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-medium text-white">
          Control VPH 🚨
        </h1>
        <p className="truncate text-xs text-wpp-muted">
          6 participantes
        </p>
      </div>
      <div className="flex shrink-0 gap-1">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-wpp-muted transition active:bg-white/10"
          aria-label="Videollamada"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-wpp-muted transition active:bg-white/10"
          aria-label="Más opciones"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
