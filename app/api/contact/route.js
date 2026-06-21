export async function POST(req) {
  try {
    const body = await req.json();
    // Placeholder: integrate with mailer, CRM, or queue
    console.log('contact form submitted', body);
    return new Response(JSON.stringify({ status: 'ok', received: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'invalid payload' }), { status: 400 });
  }
}
