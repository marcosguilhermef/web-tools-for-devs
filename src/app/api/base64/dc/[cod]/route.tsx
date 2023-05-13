import { NextResponse } from 'next/server';
import { DecBase64 } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new DecBase64(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  