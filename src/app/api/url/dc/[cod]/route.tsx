import { NextResponse } from 'next/server';
import { DecURL } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new DecURL(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  