import { PARTICIPANTS } from '../data/chatData';

export default function MessageBubble({ message, showAuthor, isConsecutive }) {
  const author = PARTICIPANTS[message.author];
  if (!author) return null;

  return (
    <div className={`flex gap-2 px-3 py-0.5 ${showAuthor ? 'pt-2' : isConsecutive ? 'pt-0.5' : 'pt-2'}`}>
      <div className="flex shrink-0 flex-col items-center gap-0.5">
        {showAuthor ? (
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${author.color} ring-1 ring-white/10`}
            title={author.name}
          >
            {author.emoji}
          </div>
        ) : (
          <div className="w-9" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        {showAuthor && (
          <p className="mb-0.5 text-xs font-medium text-wpp-green">
            {author.emoji} {author.name}
          </p>
        )}
        <div className="flex flex-wrap items-end gap-1.5">
          <div className="max-w-[85%] rounded-lg rounded-tl-none bg-wpp-bubble-them px-3 py-2 shadow-bubble">
            <p className="whitespace-pre-wrap break-words text-[15px] leading-snug text-wpp-text">
              {message.text}
            </p>
          </div>
          {message.time && (
            <span className="text-[11px] text-wpp-muted">{message.time}</span>
          )}
        </div>
      </div>
    </div>
  );
}
