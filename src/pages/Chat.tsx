import Conversation from "../components/Conversation/Conversation";
import MessageInput from "../components/MessageInput/MessageInput";
import HeaderBar from "../HeaderBar/HeaderBar";

export default function Chat() {
  return (
    <div className="bg-cardbg flex flex-col h-screen">
      <HeaderBar />
      <Conversation />
      <MessageInput />
    </div>
  );
}
