import { NextResponse } from 'next/server';
import { ValidarCNPJ } from 'documento-validacao-br';

export async function POST(request: Request) 
{
  const body = await request.json();
  const value = (new ValidarCNPJ(body.cnpj)).execute();
  return NextResponse.json({ "data": value });
}
  