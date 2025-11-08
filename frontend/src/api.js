const API_BASE = "http://localhost:4000/api";

export async function sendContactForm(data) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    return { ok: false };
  }
}

export async function sendWaitlist(data) {
  try {
    const res = await fetch(`${API_BASE}/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    return { ok: false };
  }
}
