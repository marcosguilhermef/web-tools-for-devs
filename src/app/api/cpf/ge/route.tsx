import { GerarCPF } from "documento-validacao-br";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) 
{
  const value = (new GerarCPF()).execute()
  return NextResponse.json({ data: value});

}