import { GerarCPF } from "documento-validacao-br";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) 
{
  let url = new URL(request.url)
  let formated = url.searchParams.get('formated') || false

  if(formated === 'true'){
    const value = (new GerarCPF('xxx.xxx.xxx-xx')).execute()
    return NextResponse.json({ data: value});  
  }

  const value = (new GerarCPF()).execute()
  return NextResponse.json({ data: value});

}