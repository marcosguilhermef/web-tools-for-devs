import { NextResponse } from 'next/server';
import { EncSHA512 } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new EncSHA512(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  