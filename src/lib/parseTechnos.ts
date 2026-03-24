/**
 * Parse a technos string with technologies separated by "/".
 * Example: "JS/TS" → ["JS", "TS"]
 */
export function parseTechnos(field: string | null | undefined): string[] {
  if (!field) return [];
  return field
    .split("/")
    .map((t) => t.trim())
    .filter(Boolean);
}
