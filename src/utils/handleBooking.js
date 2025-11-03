const N8N_BOOKING_WEBHOOK_URL = import.meta.env.VITE_N8N_BOOKING_WEBHOOK_URL;

export async function handleBooking(formData) {
  try {
    const response = await fetch(N8N_BOOKING_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status ${response.status}`);
    }

    console.log('Webhook erfolgreich ausgelöst');
  } catch (error) {
    console.error('Fehler beim Auslösen des Webhooks:', error);
  }
}
