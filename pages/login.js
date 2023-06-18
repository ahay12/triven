import Image from "next/image";
import Copyright from "../components/Copyright";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-[#FF626D] to-[#FCAD72]">
        <div className="grid grid-cols-2 place-items-center">
          <div className="pt-16">
            <h1 className="text-[30px] p-6">
              Step in style to <br></br> own your{" "}
              <span className="text-white">dream</span> <br></br> shoes
            </h1>
            <form>
              <div className="w-[457px] h-[392px] bg-white/50 rounded-md">
                <div className="container">
                  <div className="grid grid-rows-5 gap-5">
                    <div className="mt-3">
                      <h1 className="text-xl font-bold border-b-2 border-primary uppercase">
                        Masuk
                      </h1>
                      <p>
                        Apabila Anda Memiliki Akun, Masuk dengan alamat email.
                      </p>
                    </div>
                    <div>
                      <h1>Email</h1>
                      <input className="w-full h-[36px]" type={"email"}></input>
                    </div>
                    <div>
                      <h1>Password</h1>
                      <input
                        className="w-full h-[36px]"
                        type={"password"}
                      ></input>
                    </div>
                    <div>
                      <button className="w-full h-[36px] bg-primary text-white">
                        Masuk
                      </button>
                    </div>
                    <div className="grid grid-cols-2">
                      <div>Lupa Password?</div>
                      <div>
                        Belum punya akun?{" "}
                        <a
                          href=""
                          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCAD72] to-[#FF626D]"
                        >
                          Registrasi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="">
            <Image src={"/TRIVEN.png"} width={500} height={100} />
            <div className="w-[528px] h-[132px]">
              <p className="text-white text-xl text-left">
                Selamat datang di toko sepatu kami, tempatnya untuk menemukan
                langkah gaya yang sempurna. Kami menyediakan sepatu kualitas
                premium untuk menjaga kenyamanan dan gayamu dalam setiap
                langkah.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}
