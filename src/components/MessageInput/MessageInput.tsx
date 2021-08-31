export default function MessageInput() {
  return (
    <div className="mt-auto flex-shrink-0 px-2.5 pb-2.5">
      <div
        className="text-white bg-message-input-bg p-2.5 outline-none max-h-80 overflow-auto"
        contentEditable="true"
        placeholder="Write on #welcome"
      ></div>
    </div>
  );
}
