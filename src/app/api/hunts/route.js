import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(process.env.DB_URI);

  console.log(process.env.DB_URI);
}