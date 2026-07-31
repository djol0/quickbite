import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { prisma } from "./lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { loginSchema } from "./lib/validations/auth"
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const result = loginSchema.safeParse(credentials)
                if(!result.success) {
                    return null
                }

                const { email, password } = result.data
                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if(!user) {
                    return null
                }

                const isValid = await bcrypt.compare(password, user.password)
                if(!isValid) {
                    return null
                }

                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                token.id = user.id
            }

            return token
        },

        async session({ session, token }) {
            if(session.user) {
                session.user.id = token.id as string
            }

            return session
        }
    }
});