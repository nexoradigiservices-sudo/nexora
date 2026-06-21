export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({
      name,
      email,
      message,
    });

    return Response.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Submission failed",
      },
      {
        status: 400,
      }
    );
  }
}