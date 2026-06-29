const INDEXNOW_KEY = "64b9d6bab8b4467d8bdaaf37235be472";
const HOST = "www.nomadtaxindex.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export const ALL_URLS: string[] = [
  "https://www.nomadtaxindex.com",
  "https://www.nomadtaxindex.com/compare",
  "https://www.nomadtaxindex.com/visa/spain",
  "https://www.nomadtaxindex.com/visa/brazil",
  "https://www.nomadtaxindex.com/visa/france",
  "https://www.nomadtaxindex.com/visa/south-korea",
  "https://www.nomadtaxindex.com/visa/portugal",
  "https://www.nomadtaxindex.com/visa/uae",
  "https://www.nomadtaxindex.com/visa/thailand",
  "https://www.nomadtaxindex.com/visa/germany",
  "https://www.nomadtaxindex.com/visa/indonesia",
  "https://www.nomadtaxindex.com/visa/colombia",
  "https://www.nomadtaxindex.com/visa/estonia",
  "https://www.nomadtaxindex.com/compare/spain-vs-brazil",
  "https://www.nomadtaxindex.com/compare/spain-vs-france",
  "https://www.nomadtaxindex.com/compare/spain-vs-south-korea",
  "https://www.nomadtaxindex.com/compare/spain-vs-portugal",
  "https://www.nomadtaxindex.com/compare/spain-vs-uae",
  "https://www.nomadtaxindex.com/compare/spain-vs-thailand",
  "https://www.nomadtaxindex.com/compare/spain-vs-germany",
  "https://www.nomadtaxindex.com/compare/spain-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/spain-vs-colombia",
  "https://www.nomadtaxindex.com/compare/spain-vs-estonia",
  "https://www.nomadtaxindex.com/compare/brazil-vs-france",
  "https://www.nomadtaxindex.com/compare/brazil-vs-south-korea",
  "https://www.nomadtaxindex.com/compare/brazil-vs-portugal",
  "https://www.nomadtaxindex.com/compare/brazil-vs-uae",
  "https://www.nomadtaxindex.com/compare/brazil-vs-thailand",
  "https://www.nomadtaxindex.com/compare/brazil-vs-germany",
  "https://www.nomadtaxindex.com/compare/brazil-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/brazil-vs-colombia",
  "https://www.nomadtaxindex.com/compare/brazil-vs-estonia",
  "https://www.nomadtaxindex.com/compare/france-vs-south-korea",
  "https://www.nomadtaxindex.com/compare/france-vs-portugal",
  "https://www.nomadtaxindex.com/compare/france-vs-uae",
  "https://www.nomadtaxindex.com/compare/france-vs-thailand",
  "https://www.nomadtaxindex.com/compare/france-vs-germany",
  "https://www.nomadtaxindex.com/compare/france-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/france-vs-colombia",
  "https://www.nomadtaxindex.com/compare/france-vs-estonia",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-portugal",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-uae",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-thailand",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-germany",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-colombia",
  "https://www.nomadtaxindex.com/compare/south-korea-vs-estonia",
  "https://www.nomadtaxindex.com/compare/portugal-vs-uae",
  "https://www.nomadtaxindex.com/compare/portugal-vs-thailand",
  "https://www.nomadtaxindex.com/compare/portugal-vs-germany",
  "https://www.nomadtaxindex.com/compare/portugal-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/portugal-vs-colombia",
  "https://www.nomadtaxindex.com/compare/portugal-vs-estonia",
  "https://www.nomadtaxindex.com/compare/uae-vs-thailand",
  "https://www.nomadtaxindex.com/compare/uae-vs-germany",
  "https://www.nomadtaxindex.com/compare/uae-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/uae-vs-colombia",
  "https://www.nomadtaxindex.com/compare/uae-vs-estonia",
  "https://www.nomadtaxindex.com/compare/thailand-vs-germany",
  "https://www.nomadtaxindex.com/compare/thailand-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/thailand-vs-colombia",
  "https://www.nomadtaxindex.com/compare/thailand-vs-estonia",
  "https://www.nomadtaxindex.com/compare/germany-vs-indonesia",
  "https://www.nomadtaxindex.com/compare/germany-vs-colombia",
  "https://www.nomadtaxindex.com/compare/germany-vs-estonia",
  "https://www.nomadtaxindex.com/compare/indonesia-vs-colombia",
  "https://www.nomadtaxindex.com/compare/indonesia-vs-estonia",
  "https://www.nomadtaxindex.com/compare/colombia-vs-estonia",
  "https://www.nomadtaxindex.com/guides/spain-digital-nomad-visa-tax-rate-2026",
  "https://www.nomadtaxindex.com/guides/move-from-uae-to-thailand-2026",
  "https://www.nomadtaxindex.com/guides/portugal-digital-nomad-tax-calculator-2026",
  "https://www.nomadtaxindex.com/guides/does-france-have-a-digital-nomad-visa",
  "https://www.nomadtaxindex.com/guides/spain-vs-portugal-digital-nomad-tax-2026",
  "https://www.nomadtaxindex.com/guides/digital-nomad-visa-spain-tax-2026",
];

export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  try {
    const body = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      console.log(`[IndexNow] Successfully submitted ${urls.length} URLs. Status: ${res.status}`);
      return true;
    }

    console.error(`[IndexNow] Submission failed. Status: ${res.status} ${res.statusText}`);
    return false;
  } catch (err) {
    console.error("[IndexNow] Network error:", err);
    return false;
  }
}
