import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow, ALL_URLS } from "@/app/lib/indexnow";

const SECRET = process.env.INDEXNOW_SECRET;

export async function POST(req: NextRequest) {
  const { secret } = await req.json().catch(() => ({}));
  if (!SECRET || secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const success = await submitToIndexNow(ALL_URLS);

  if (success) {
    return NextResponse.json({
      ok: true,
      message: `Submitted ${ALL_URLS.length} URLs to IndexNow`,
    });
  }

  return NextResponse.json(
    { ok: false, message: "IndexNow submission failed — check server logs" },
    { status: 500 }
  );
}
