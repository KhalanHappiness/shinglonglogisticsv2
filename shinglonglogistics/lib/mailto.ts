// The site has no email backend yet, so forms hand their contents to the
// visitor's email app as a pre-filled message.
export function openMailto(recipient: string, subject: string, lines: string[]) {
  const href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = href;
}

export function formValue(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}
