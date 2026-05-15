"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setReply(data.reply || data.error);

      setMessage("");
    } catch (error) {
      setReply("Failed to connect to AI.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          ARC MCP AI Chat
        </h1>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask anything about ARC..."
          style={{
            width: "100%",
            padding: "16px",
            background: "#0f172a",
            border: "1px solid #334155",
            color: "white",
            borderRadius: "12px",
            marginBottom: "20px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "14px 24px",
            background: "#2563eb",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "30px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        <div
          style={{
            background: "#0f172a",
            padding: "24px",
            borderRadius: "16px",
            lineHeight: "1.8",
            border: "1px solid #1e293b",
            minHeight: "200px",
          }}
        >
          <h2
            style={{
              marginBottom: "16px",
              fontSize: "22px",
            }}
          >
            AI Reply
          </h2>

          <p
            style={{
              whiteSpace: "pre-wrap",
              color: "#e2e8f0",
            }}
          >
            {reply || "Your AI response will appear here..."}
          </p>
        </div>
      </div>
    </main>
  );
}