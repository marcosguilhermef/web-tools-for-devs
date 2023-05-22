import { NextResponse } from 'next/server';
import { ConsultCep } from '@/app/tools/ConsultCep';
import { ConsultaAuxBrasil } from '@/app/tools/ConsultaAuxBrasil';
export async function GET(request: Request, { params, }: { params: { code : string, anomes: string }; },) 
{
  let data : AuxilioType = {
    nis: params.code,
    mesRef: params.anomes
  } 
  const value = await (new ConsultaAuxBrasil(data)).execute();
  return NextResponse.json( value );
}
  