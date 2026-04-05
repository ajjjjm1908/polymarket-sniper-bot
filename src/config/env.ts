import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PRIVATE_KEY: z.string().min(1, "PRIVATE_KEY is required"),
  DRY_RUN: z.enum(["true", "false"]).default("true"),
  LOG_LEVEL: z.string().default("info"),
  MAX_POSITION_USD: z.string().default("50"),
  MAX_DAILY_LOSS_USD: z.string().default("25"),
  TAKE_PROFIT_PCT: z.string().default("12"),
  STOP_LOSS_PCT: z.string().default("6"),
  PRIVATE_KEY: z.string().default("0xYOUR_PRIVATE_KEY_HERE"),
  DRY_RUN: z.string().default("true"),
  MAX_SLIPPAGE_BPS: z.string().default("150"),
  ORDER_SIZE_USD: z.string().default("20"),
  WATCH_TAGS: z.string().default("politics,crypto,breaking-news"),
});

export const env = envSchema.parse(process.env);

export function buildRuntimeContext() {
  const privateKeyPreview =
    env.PRIVATE_KEY.length <= 10
      ? env.PRIVATE_KEY
      : `${env.PRIVATE_KEY.slice(0, 6)}...${env.PRIVATE_KEY.slice(-4)}`;

  return {
    repo: "polymarket-sniper-bot",
    family: "polymarket",
    market: "new and high-volume Polymarket markets",
    signal: "fresh listings, rapid volume expansion, and odds dislocations",
    dryRun: env.DRY_RUN === "true",
    orderSize: env.ORDER_SIZE_USD,
    privateKeyPreview,
  } as const;
}
