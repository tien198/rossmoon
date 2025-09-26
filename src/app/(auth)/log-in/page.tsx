'use client'

import Link from "next/link";
import F from "../comps/authForm";
import { useAuthReducer } from "../hooks/useAuthReducer";
import { useFormState } from "react-dom";
import {  loginAction } from "../actions";

export default function Auth() {
    const { authState, changeEmail, changePassword } = useAuthReducer()

    const [actionState, formAction ] = useFormState(loginAction, {})

    return (
        <div className="h-full w-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md shadow-lg text-gray-950" >
            <F.Form action={formAction}>
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                <F.Input
                    type="email"
                    placeholder="Email"
                    value={authState.email} onChange={changeEmail}
                />
                <F.Input
                    type="password"
                    placeholder="Mật khẩu"
                    value={authState.password} onChange={changePassword}
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
