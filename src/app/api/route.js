export async function GET() {
  const res = await fetch("mongodb+srv://mallory:BiC2DxvemSuNdnfw@cluster0.zfn6hwe.mongodb.net/?retryWrites=true&w=majority", {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}