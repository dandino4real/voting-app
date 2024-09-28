import Link from "next/link";

export default function Login() {
    return (
      <div className="flex flex-col justify-center min-h-screen border ">
        <section className="bg-[#E2EDF2] w-[60%] mx-auto px-20 py-14 rounded-xl">
          <div className=" flex flex-col  items-center">
            <h3 className=" text-[#333333] font-semibold text-3xl">
            Welcome back
            </h3>
            <p className=" mt-4">
            Don&apos;t have an account?
            <Link href={'/create-account'}>
            
              <span className=" text-basecolour cursor-pointer hover:text-opacity-80">  Sign up</span>{" "}
            </Link>
            </p>
          </div>
  
          <form action="action" className=" mt-10">
            <div className="flex flex-col">
              <label htmlFor="email" className=" text-[#666666] mb-2">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                placeholder="Enter your email address"
              />

            </div>
            
            <div className="flex flex-col mt-6">
              <label htmlFor="lastname" className=" text-[#666666] mb-2">
                Password
              </label>
              <input
                id="password"
                type="text"
                className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                placeholder="Enter your password"
              />
              <p className=" text-end mt-2 text-sm text-[#3F78A4] hover:text-[#346a93] cursor-pointer">Forgot password?</p>

            </div>
            
            <div className=" bg-basecolour p-4 mt-6 rounded-lg">
              <button className=" w-full text-[#fff] text-lg font-semibold">
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
  