export async function GET(request, { params }) {
  const { cabinId } = params;

  return Response.json({ test: 'test' });
}
