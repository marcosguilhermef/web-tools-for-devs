import { NextResponse } from 'next/server';

export default async function fatory(body: any, Class: new (value: string) => ToolInterface<any>) 
{

  if(body?.text != null || body?.text != undefined){
    const value = (new Class(body.text)).execute();
    return NextResponse.json({ data: value});
  }

  return NextResponse.json({ data: null });
  
}