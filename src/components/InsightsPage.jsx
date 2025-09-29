import { useState } from "react";

export default function InsightsPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // fake transaction data for now
  const transactions = []; // later you’ll fetch this from backend

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    let reply = "";

    if (transactions.length === 0) {
      reply = "You haven’t made any transactions yet. Add some spending and I’ll give you insights.";
    } else {
      reply = "Here’s what I see: You’ve been spending mostly on food and transport.";
    }

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">AI Insights</h1>
        <button
          onClick={clearChat}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm font-semibold"
        >
          Clear Chat
        </button>
      </div>

      {/* Chat history */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-lg ${
              msg.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-gray-400 text-center">
            Ask me questions about your transactions...
          </p>
        )}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-4 flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about your spending..."
        />
        <button
          type="submit"
          className="bg-purple-600 px-4 py-2 rounded-lg font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}