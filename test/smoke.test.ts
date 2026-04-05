import { describe, expect, it } from "vitest";
import { buildStrategyDecision } from "../src/strategies/coreStrategy.js";

describe("polymarket-sniper-bot", () => {
  it("builds a trade-ready decision when the placeholder score is high", () => {
    const decision = buildStrategyDecision(
      {
        repo: "polymarket-sniper-bot",
        family: "polymarket",
        market: "new and high-volume Polymarket markets",
        signal: "fresh listings, rapid volume expansion, and odds dislocations",
        dryRun: true,
        orderSize: "25",
        privateKeyPreview: "test",
      },
      { score: 0.8 },
    );

    expect(decision.shouldTrade).toBe(true);
  });
});
