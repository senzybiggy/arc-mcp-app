"use client";

import { useState } from "react";

export default function Home() {
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

      setReply(data.reply);
    } catch (error) {
      setReply("Something went wrong");
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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          ARC MCP AI Chat
        </h1>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about ARC..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          {loading ? "Loading..." : "Send"}
        </button>

        <div
          style={{
            background: "#0f172a",
            padding: "24px",
            borderRadius: "18px",
            border: "1px solid #1e293b",
            lineHeight: "1.8",
            whiteSpace: "pre-wrap",
          }}
        >
          <h2
            style={{
              marginBottom: "16px",
            }}
          >
            AI Reply
          </h2>

          {reply || "Your AI response will appear here."}
        </div>
      </div>
    </main>
  );
}