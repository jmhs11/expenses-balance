import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:3001/expenses", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const res = await fetch("http://localhost:3001/expenses", {
    method: "POST",
    body: JSON.stringify(request.body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
