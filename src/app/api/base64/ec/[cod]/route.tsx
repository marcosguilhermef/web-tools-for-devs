import { NextResponse } from 'next/server';
import { EncBase64 } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new EncBase64(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  