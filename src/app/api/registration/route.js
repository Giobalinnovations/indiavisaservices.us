export async function POST(req) {
  const body = await req.json();

  return Response.json(
    { message: 'registration is done', data: body },
    { status: 201 }
  );
}
