import { NextResponse } from 'next/server';
import { ConsultCep } from '@/app/tools/ConsultCep';

export async function GET(request: Request, { params, }: { params: { cep: string }; },) 
{
  const value = await (new ConsultCep(params.cep)).execute();
  return NextResponse.json( value );
}
  