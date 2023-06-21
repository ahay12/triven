import Image from "next/image";
import Copyright from "../components/Copyright";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { userService } from "../services/user.service";
import { alertService } from "../services/alert.service";
import Link from "next/link";

export default function Registrasi() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", true);
        router.push("login");
      })
      .catch(alertService.error);
  }
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-[#FF626D] to-[#FCAD72]">
        <div className="grid grid-cols-2 place-items-center">
          <div className="pt-10">
            <h1 className="text-[30px] font-semibold p-6">
              Step in style to <br></br> own your{" "}
              <span className="text-white">dream</span> <br></br> shoes
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[457px] h-auto bg-white/50 rounded-md">
                <div className="container">
                  <div className="grid grid-rows-5 gap-3">
                    <div className="mt-3">
                      <h1 className="text-xl font-bold border-primary uppercase pt-5">
                        Buat Akun
                      </h1>
                    </div>
                    <div>
                      <label>Username</label>
                      <input
                        name={"username"}
                        {...register("username", { required: true })}
                        type={"username"}
                        className="w-full h-[36px] opacity-60"
                        placeholder={"Masukan username anda"}
                      />
                      <div className="invalid-feedback">
                        {errors.username?.message}
                      </div>
                    </div>
                    <div>
                      <label>Password</label>
                      <input
                        name={"password"}
                        {...register("password", { required: true })}
                        className="w-full h-[36px] opacity-60"
                        type={"password"}
                        placeholder={"Masukan password anda"}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                    <div>
                      <button
                        disabled={formState.isSubmitting}
                        className="w-full h-[36px] bg-primary text-white"
                      >
                        {formState.isSubmitting}
                        Buat Akun
                      </button>
                    </div>

                    <div className="grid grid-cols-2">
                      <div>
                        Sudah Punya Akun?{" "}
                        <Link
                          href="/login"
                          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCAD72] to-[#FF626D]"
                        >
                          Login
                        </Link>
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
