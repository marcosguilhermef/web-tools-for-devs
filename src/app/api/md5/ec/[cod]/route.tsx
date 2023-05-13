import { NextResponse } from 'next/server';
import { EncMD5 } from '@/app/tools';


export async function GET(request: Request, { params, }: { params: { cod: string }; },) 
{
  const value = (new EncMD5(params.cod)).execute();
  return NextResponse.json({ "data": value });
}
  