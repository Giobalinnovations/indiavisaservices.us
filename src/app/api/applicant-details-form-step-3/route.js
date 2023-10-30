export async function POST(req) {
  const body = await req.json();
  console.log(body);
  return Response.json(
    { message: 'step 3 is done', data: body },
    { status: 201 }
  );
}
