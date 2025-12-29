import DOMPurify from "isomorphic-dompurify";

export default function sanitizeHtml(dirty?: string) {
  if (!dirty) return "";
  // Basic sanitize using sensible defaults. Adjust options here if needed.
  return DOMPurify.sanitize(dirty);
}
