export async function POST(req) {
  const body = await req.json();
  console.log(body);
  return Response.json(
    { message: 'registration is done', data: body },
    { status: 201 }
  );
}
