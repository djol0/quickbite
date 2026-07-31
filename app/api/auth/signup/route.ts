import { prisma } from "@/lib/prisma"
import { signupSchema } from "@/lib/validations/auth"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(request: Request) {
    const body = await request.json()

    const result = signupSchema.safeParse(body)

    if(!result.success) {
        return NextResponse.json(
            {
                message: 'Invalid data',
                errors: result.error.flatten()
            },
            {
                status: 400
            }
        )
    }

    const { email, name, password } = result.data

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(existingUser) {
        return NextResponse.json(
            {
                message: 'Email already reqistered'
            },
            {
                status: 409
            }
        )
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        },
    });

    return NextResponse.json(
        {
            message: "User created successfully",
            userId: user.id,
        },
        {
            status: 201,
        }
    )
}