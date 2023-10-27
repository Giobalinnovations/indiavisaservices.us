export async function POST(req) {
  const body = await req.json();
  return Response.json(
    { message: 'applicant details updated', data: body },
    { status: 201 }
  );
}
