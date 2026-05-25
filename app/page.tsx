"use client";

const tokens = [
  {
    name: "BTC",
    bullish: 78,
    bearish: 22,
    price: "$108,420",
    trend: "Dominating market momentum",
  },
  {
    name: "ETH",
    bullish: 64,
    bearish: 36,
    price: "$5,840",
    trend: "Strong whale accumulation",
  },
  {
    name: "SOL",
    bullish: 71,
    bearish: 29,
    price: "$312",
    trend: "High velocity breakout",
  },
  {
    name: "PEPE",
    bullish: 44,
    bearish: 56,
    price: "$0.000031",
    trend: "Meme momentum weakening",
  },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Market Arena
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              maxWidth: "700px",
              lineHeight: "1.6",
            }}
          >
            Watch tokens battle in real time through bullish and bearish momentum.
            AI powered sentiment tracking for crypto markets.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          {tokens.map((token) => (
            <div
              key={token.name}
              style={{
                background: "#0f172a",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  {token.name}
                </h2>

                <span
                  style={{
                    color: "#38bdf8",
                    fontWeight: "bold",
                  }}
                >
                  {token.price}
                </span>
              </div>

              <div
                style={{
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>🐂 Bulls</span>
                  <span>{token.bullish}%</span>
                </div>

                <div
                  style={{
                    width: "100%",
                    background: "#1e293b",
                    height: "14px",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${token.bullish}%`,
                      background: "#22c55e",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>🐻 Bears</span>
                  <span>{token.bearish}%</span>
                </div>

                <div
                  style={{
                    width: "100%",
                    background: "#1e293b",
                    height: "14px",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${token.bearish}%`,
                      background: "#ef4444",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  background: "#020617",
                  padding: "14px",
                  borderRadius: "12px",
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                }}
              >
                🤖 AI Insight: {token.trend}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#0f172a",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "24px",
            }}
          >
            Live Momentum Feed
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#020617",
                padding: "18px",
                borderRadius: "14px",
              }}
            >
              🚀 BTC bulls increasing dominance after whale accumulation spike.
            </div>

            <div
              style={{
                background: "#020617",
                padding: "18px",
                borderRadius: "14px",
              }}
            >
              ⚠️ PEPE bearish pressure intensifying across meme sectors.
            </div>

            <div
              style={{
                background: "#020617",
                padding: "18px",
                borderRadius: "14px",
              }}
            >
              🔥 SOL momentum breakout attracting high trader attention.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}