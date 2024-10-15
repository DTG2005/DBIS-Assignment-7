export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center py-16">
        Hello world!
      </h1>
      <div className="row-start-1 sm:row-start-1 w-full h-full text-center">
        <h1>Authenticator welcomes you!</h1>

        <div className="my-6"></div>
        <div className="flex items-center justify-center">
          <div className="border-2 border-white rounded-full p-2">
            <a
              href="/DBIS-Assignment-7/auth/register"
              className="text-2xl font-bold transition duration-300 ease-in-out"
            >
              <div className="hover:bg-slate-500 hover:text-white active:bg-slate-700 active:text-white p-2 rounded-full">
                Register
              </div>
            </a>
          </div>
          <div className="border-2 border-white rounded-full p-2">
            <a
              href="/DBIS-Assignment-7/auth/login"
              className="text-2xl font-bold transition duration-300 ease-in-out"
            >
              <div className="hover:bg-slate-500 hover:text-white active:bg-slate-700 active:text-white p-2 rounded-full">
                Login
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
