'use client'

import F from "../comps/authForm";
import { useAuthReducer } from "../hooks/useAuthReducer";

export default function SingIn() {
    const { authState, changeEmail, changePassword } = useAuthReducer()

    return (
        <div className="h-full w-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md shadow-lg text-gray-950" >
            <F.Form>
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>
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
                <F.Input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    value={authState.password} onChange={changePassword}
                />
                <F.Submit >
                    Đăng Ký
                </F.Submit>
            </F.Form>
        </div >
    );
};
