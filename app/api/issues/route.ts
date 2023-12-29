// import { NextRequest, NextResponse } from "next/server";
// import { z } from 'zod';
// import prisma from "@/prisma/client";

// const createIssueSchema = z.object({
//   title: z.string().min(1).max(255),
//   description: z.string().min(1)
// });

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const validation = createIssueSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });

//   const newIssue = await prisma.issue.create({
//     data: { title: body.title, description: body.description }
//   });

//   return NextResponse.json(newIssue, { status: 201 });
// }


import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient

const prisma = new PrismaClient(); // Instantiate a new PrismaClient

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description }
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (e) {
    // Log the error for debugging
    console.error(e);
    // Return a generic server error response
    return NextResponse.json({ error: 'An error occurred while creating the issue.' }, { status: 500 });
  }
}

// Make sure to close the Prisma client connection, especially important in serverless environments
export function middleware() {
  return async (req: NextRequest, ev: any) => {
    const response = await NextResponse.next();
    await prisma.$disconnect();
    return response;
  };
}
