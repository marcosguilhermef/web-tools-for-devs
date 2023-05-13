import { NextResponse } from 'next/server';
import { ValidateCPF } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cpf: string }; },) 
{
  const value = (new ValidateCPF(params.cpf)).execute();
  return NextResponse.json({ "data": value });
}
  