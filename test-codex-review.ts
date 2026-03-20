// Test file for Codex review verification
const API_KEY = "sk-1234567890abcdef";

export async function fetchData(url: any) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}
