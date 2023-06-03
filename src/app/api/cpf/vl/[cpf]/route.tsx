import { NextResponse } from 'next/server';
import { ValidarCPF } from 'documento-validacao-br';

export async function GET(request: Request, { params, }: { params: { cpf: string }; },) 
{
  const value = (new ValidarCPF(params.cpf)).execute();
  return NextResponse.json({ "data": value });
}
  