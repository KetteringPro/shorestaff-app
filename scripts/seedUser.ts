import 'dotenv/config';
import { supabaseServer } from "../lib/supabaseServer";

async function seedUser() {
  console.log("🌱 Seeding test user...");

  const { data, error } = await supabaseServer
    .from("users")
    .insert([
      {
        email: "testuser@shorestaff.app",
        phone: "555-000-1234",
        role: "WORKER",
        verified: true,
      },
    ])
    .select();

  if (error) console.error("❌ Insert failed:", error);
  else console.log("✅ Test user created:", data);
}

seedUser();