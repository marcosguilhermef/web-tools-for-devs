import { EncSHA3_256 } from '@/app/tools';
import RoteToolFactory from '@/app/api/RoteToolFactory'
export async function POST(request: Request) 
{
  const body = await request.json();
  return await RoteToolFactory(body,EncSHA3_256)
  
}