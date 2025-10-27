import emailjs from '@emailjs/browser';

export async function notifyOwner(formData) {
  const templateParams = {
  name: formData.name,
  date: formData.date,
  time: formData.time,
  seating: formData.seating,
  people: formData.people,
  message: formData.message,
};

const customerParams = {
  name: formData.name,
  date: formData.date,
  time: formData.time,
  seating: formData.seating,
  people: formData.people,
  mail: formData.mail,
};

  try {
    await emailjs.send(
      'service_219m3jd',       
      'template_r1b59p2',       
      templateParams,
      '7m_z8N4PiuOrUrm3C'        
    );

    await emailjs.send(
        'service_219m3jd',
        'template_qiove7m',
        customerParams,
        '7m_z8N4PiuOrUrm3C'
    );

    console.log('E-Mail erfolgreich gesendet');
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
  }
}
