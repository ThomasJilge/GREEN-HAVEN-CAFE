const N8N_CONTACT_WEBHOOK_URL = import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL;

export async function handleContact(formData) {
  try {
    const response = await fetch(N8N_CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status ${response.status}`);
    }

    console.log('Kontaktformular erfolgreich versendet');
    return { success: true };
  } catch (error) {
    console.error('Fehler beim Kontaktformular-Versand:', error);
    return { success: false, error };
  }
}

