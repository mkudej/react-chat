import Message from "../Message/Message";

export default function Conversation() {
  return (
    <div className="p-5 overflow-auto flex-grow">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
