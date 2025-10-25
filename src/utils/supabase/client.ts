import { createClient as createSupabaseClient } from "npm:@supabase/supabase-js@2";
import { projectId, publicAnonKey } from "./info";

export function createClient() {
  return createSupabaseClient(
    `https://${projectId}.supabase.co`,
    publicAnonKey
  );
}
