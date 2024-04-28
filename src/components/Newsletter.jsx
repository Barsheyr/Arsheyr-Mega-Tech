import React from "react";

const Newsletter = () => {
  return (
    <div>
      <main className="max-w-5xl mx-auto py-20 flex flex-col items-center text-center">
        <div className="w-[100%] h-0.5 bg-gray-200 mt-10 mb-20"></div>

        {/* das */}
        <div className="space-y-5 mt-20 px-20">
          <h1 className="text-4xl"> Subscribe to our Newsletter </h1>
          <p className="tracking-widest">
            Receive an exclusive 10% discount code when you signup.
          </p>

          <div className="flex flex-row items-center pt-20 justify-between">
            <form action="">
              <input type="email" placeholder="Email" className="" />
            </form>
            <p className="font-bold">Subscribe </p>
          </div>
        </div>

        <div className="w-[70%] h-0.5 bg-black mt-10"></div>
      </main>
    </div>
  );
};

export default Newsletter;
