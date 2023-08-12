import { NextResponse } from 'next/server';
import { location } from '@/app/tools/Location';
export const dynamic = 'force-dynamic';
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


async function save(val: location){
    const location = await prisma.Locations.create({
        data: {
            ...val
        }
    })

    return location;
}

export async function POST(request: Request) 
{
  const body : location = await request.json();
  const location = save(body)
  return NextResponse.json({ "data": location });

}
  