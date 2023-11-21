export async function POST(req) {
  const body = await req.json();

  return Response.json(
    { message: 'step 3 is done', data: body },
    { status: 201 }
  );
}
