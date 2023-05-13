import { NextResponse } from 'next/server';
import { EncURL } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new EncURL(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  