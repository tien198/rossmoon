import F from "./comps/authForm";

export default function Auth() {

    return (
        <div className="h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')` }}>

            {/* Form đăng nhập */}
            <div className="h-full w-full max-w-3xl py-20 px-5 md:px-16 bg-black/50 backdrop-blur-md shadow-lg text-gray-950">
                <F.Form>
                    <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                    <F.Input
                        type="email"
                        placeholder="Email"
                    />
                    <F.Input
                        type="password"
                        placeholder="Mật khẩu"
                    />
                    <F.Submit >
                        Đăng Nhập
                    </F.Submit>
                    <p className="mt-4 text-center text-white/80">
                        Chưa có tài khoản? <a href="#" className="text-gray-950 hover:underline">Đăng ký</a>
                    </p>
                </F.Form>
            </div>
        </div >
    );
};
