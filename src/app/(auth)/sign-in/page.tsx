'use client'

import type { Z_Invalid } from "@/types/zod.ErrorTree";

import F from "../comps/authForm";
import useSignin from "../hooks/useSignin";

export default function SingIn() {
    const {
        authState, changeField, invalid,
        actionState, isPending,
        handleSubmit
    } = useSignin()

    return (
        <div className="h-full w-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md shadow-lg " >
            <F.Form
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>
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
                            ? (invalid.password || actionState.password) as Z_Invalid
                            : undefined
                    }
                    name="password"
                />
                <F.Input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    value={authState.passwordConfirm} onChange={changeField('passwordConfirm')}
                    invalid={
                        authState.isSubmitted
                            ? (invalid.passwordConfirm || actionState.passwordConfirm || actionState.credential) as Z_Invalid
                            : undefined
                    }
                    name="passwordConfirm"
                />
                <F.Submit disabled={isPending}>
                    Đăng Ký
                </F.Submit>
            </F.Form>
        </div >
    );
};
