export function Modal({ title="Modal", show, children }) {
  if (!show)
    return null;

  return (
    <>
      <div className={show ? "fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300" : "hidden"}
      >
        <div className="overflow-auto relative m-4 w-2/5 min-w-[40%] max-w-[40%] max-h-[80%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl transition-all duration-300 opacity-100 translate-y-0 scale-100"
        >
          <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            {title}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

