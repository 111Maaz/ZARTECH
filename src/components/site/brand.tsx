import symbolAsset from "@/assets/zartech-symbol.webp";
import symbolAsset2 from "@/assets/zartech-symbol2.webp";

// Keep the official brand artwork bundled with the site so production never
// depends on an editor-specific asset service.
export const symbolUrl = symbolAsset;
export const symbolUrl2 = symbolAsset2;

/** Official ZARtech symbol, used unmodified. */
export function Symbol({ className = "", alt = "ZARtech Solutions symbol" }) {
  return <img src={symbolUrl} alt={alt} className={className} loading="lazy" decoding="async" />;
}
