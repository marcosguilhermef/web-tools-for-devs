import { GenCPF } from '@/app/tools';
import { fatoryGET } from '@/app/api/RoteToolFactory'

export const dynamic = 'force-dynamic';

export async function GET(request: Request) 
{
  return await fatoryGET(GenCPF)
}