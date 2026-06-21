export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let email;

    if (contentType.includes('application/json')) {
      const body = await req.json();
      email = body.email || body?.emailAddress || body?.Email;
    } else {
      // handle HTML form submissions (application/x-www-form-urlencoded or multipart/form-data)
      try {
        const formData = await req.formData();
        email = formData.get('email');
      } catch (e) {
        // fallback: parse text body
        const text = await req.text();
        const params = new URLSearchParams(text);
        email = params.get('email');
      }
    }

    if (!email) {
      return new Response(JSON.stringify({ error: 'missing email' }), { status: 400 });
    }

    console.log('newsletter sign up', email);
    // TODO: persist email to database or mailing provider
    return new Response(JSON.stringify({ status: 'ok' }), { status: 200 });
  } catch (e) {
    console.error('newsletter error', e);
    return new Response(JSON.stringify({ error: 'bad request' }), { status: 400 });
  }
}
