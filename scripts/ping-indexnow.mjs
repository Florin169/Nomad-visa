const SECRET = process.env.INDEXNOW_SECRET ?? "deploy-trigger-2026";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nomadtaxindex.com";

async function ping() {
  console.log("Pinging IndexNow...");

  const res = await fetch(`${BASE_URL}/api/indexnow`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: SECRET }),
  });

  const data = await res.json();

  if (res.ok) {
    console.log("✓", data.message);
  } else {
    console.error("✗", data.message ?? data.error);
    process.exit(1);
  }
}

ping();
