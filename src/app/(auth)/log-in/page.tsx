'use client'

import Link from "next/link";
import F from "../comps/authForm";
import useAllLogic from "../hooks/useAllLogic";

export default function Auth() {
    const {
        authState, changeField, invalidMsgs,
        actionState, formAction,
        handleSubmit
    } = useAllLogic()

    return (
        <div className="h-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md" >
            <F.Form action={formAction}
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                <F.Input
                    placeholder="Email"
                    value={authState.email} onChange={changeField('email')}
                    invalidMsgs={
                        authState.isSubmitted
                            ? (invalidMsgs.email || actionState.email)
                            : undefined
                    }
                    name="email"
                />
                <F.Input
                    type="password"
                    placeholder="Mật khẩu"
                    value={authState.password} onChange={changeField('password')}
                    invalidMsgs={
                        authState.isSubmitted
                            ? (invalidMsgs.password || actionState.password)
                            : undefined
                    }
                    name="password"
                />
                <F.Submit >
                    Đăng Nhập
                </F.Submit>
                <p className="mt-4 text-center text-white/80">
                    Chưa có tài khoản? <Link href="/auth/sign-in" className="text-gray-950 hover:underline">Đăng ký</Link>
                </p>
            </F.Form>
        </div >
    );
};