import { EncSHA224 } from '@/app/tools';
import RoteToolFactory from '@/app/api/RoteToolFactory'
export async function POST(request: Request) 
{
  const body = await request.json();
  return await RoteToolFactory(body,EncSHA224)
  
}