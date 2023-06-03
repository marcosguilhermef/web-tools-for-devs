import { NextResponse } from 'next/server';
import { GerarCPF } from 'cpf-validacao/dist/class/GerarCFP'

export default async function fatory(body: any, Class: new (value: string) => ToolInterface<any>) 
{

  if(body?.text != null || body?.text != undefined){
    const value = (new Class(body.text)).execute();
    return NextResponse.json({ data: value});
  }

  return NextResponse.json({ data: null });
  
}

export async function fatoryGET(Class: new (value?: string) => ToolInterface<any>, body?: any) 
{
  //const value = (new Class()).execute();
  const value = (new GerarCPF()).execute()
  return NextResponse.json({ data: value});
}