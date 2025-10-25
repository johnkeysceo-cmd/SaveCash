import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", cors());
app.use("*", logger(console.log));

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

app.post("/make-server-a2a21b64/waitlist", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email } = body;

    if (!name || !email) {
      return c.json({ error: "Name and email are required" }, 400);
    }

    // Save to KV store for backup
    const timestamp = new Date().toISOString();
    const key = `waitlist:${email}`;
    await kv.set(key, {
      name,
      email,
      timestamp,
    });

    console.log(`Waitlist signup: ${name} (${email}) at ${timestamp}`);

    return c.json({ success: true, message: "Successfully added to waitlist" });
  } catch (error) {
    console.log(`Error saving waitlist entry: ${error}`);
    return c.json({ error: "Failed to save waitlist entry" }, 500);
  }
});

app.get("/make-server-a2a21b64/waitlist", async (c) => {
  try {
    const entries = await kv.getByPrefix("waitlist:");
    return c.json({ success: true, data: entries });
  } catch (error) {
    console.log(`Error fetching waitlist: ${error}`);
    return c.json({ error: "Failed to fetch waitlist" }, 500);
  }
});

Deno.serve(app.fetch);
