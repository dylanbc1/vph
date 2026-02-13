import { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import ChatHeader from './components/ChatHeader';
import MessageBubble from './components/MessageBubble';
import SystemEvent from './components/SystemEvent';
import { MESSAGES } from './data/chatData';

const SCROLL_THRESHOLD = 80;

function App() {
  const scrollRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const checkAtBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const atBottom = scrollHeight - clientHeight - scrollTop < SCROLL_THRESHOLD;
    setShowScrollDown(!atBottom);
  }, []);

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      checkAtBottom();
    });
    return () => cancelAnimationFrame(t);
  }, [checkAtBottom]);

  const items = useMemo(() => {
    let lastAuthor = null;
    return MESSAGES.map((msg) => {
      const isSystem = msg.type === 'system';
      const showAuthor = !isSystem && msg.author !== lastAuthor;
      const isConsecutive = !isSystem && msg.author === lastAuthor && lastAuthor != null;
      if (!isSystem) lastAuthor = msg.author;
      return {
        ...msg,
        showAuthor,
        isConsecutive,
      };
    });
  }, []);

  const pattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2a33' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div className="flex h-dvh w-full justify-center bg-wpp-bg">
      <div
        className="flex h-full w-full max-w-[420px] flex-col overflow-hidden bg-wpp-bg shadow-2xl sm:rounded-2xl"
        style={{ backgroundImage: pattern }}
      >
      <div className="relative flex min-h-0 flex-1 flex-col">
        <ChatHeader />
        <main
          ref={scrollRef}
          className="safe-bottom flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
          onScroll={checkAtBottom}
        >
          {items.map((item) =>
            item.type === 'system' ? (
              <SystemEvent key={item.id} text={item.text} />
            ) : (
              <MessageBubble
                key={item.id}
                message={item}
                showAuthor={item.showAuthor}
                isConsecutive={item.isConsecutive}
              />
            )
          )}
          <div className="h-4" />
        </main>
        {showScrollDown && (
          <button
            type="button"
            onClick={scrollToBottom}
            className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-wpp-green text-white shadow-lg transition hover:bg-wpp-green-dark active:scale-95"
            aria-label="Ir al final del chat"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
