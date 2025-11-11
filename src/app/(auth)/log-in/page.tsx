'use client'

import Link from "next/link";
import F from "../comps/authForm";
import useLogin from "../hooks/useLogin";
import { Z_Invalid } from "@/client/type/zod.ErrorTree";

export default function Auth() {
    const {
        authState, changeField, invalid,
        actionState, formAction, isPending,
        handleSubmit
    } = useLogin()

    return (
        <div className="h-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md" >
            <F.Form action={formAction}
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                <F.Input
                    placeholder="Email"
                    value={authState.email} onChange={changeField('email')}
                    invalid={
                        authState.isSubmitted
                            ? (invalid.email || actionState.email) as Z_Invalid
                            : undefined
                    }
                    name="email"
                />
                <F.Input
                    type="password"
                    placeholder="Mật khẩu"
                    value={authState.password} onChange={changeField('password')}
                    invalid={
                        authState.isSubmitted
                            ? (invalid.password || actionState.password || actionState.credential) as Z_Invalid
                            : undefined
                    }
                    name="password"
                />
                <F.Submit disabled={isPending}>
                    Đăng Nhập
                </F.Submit>
                <p className="mt-4 text-center text-white/80">
                    Chưa có tài khoản? <Link href="/sign-in" className="text-gray-950 hover:underline">Đăng ký</Link>
                </p>
            </F.Form>
        </div >
    );
};