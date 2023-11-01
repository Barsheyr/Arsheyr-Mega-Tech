import React from "react";

const Contacts = () => {
  return (
    <div className="lg:py-52 font-Tiltnoon">
      <h3 className="max-w-5xl mx-auto text-4xl tracking-widest font-bold mt-52">
        Join our newsletter and get 20% off
      </h3>
      <div className="max-w-5xl mx-auto flex items-center lg:flex-row flex-col px-10 lg:px-0 justify-between gap-5 mt-10">
        <p className="lg:w-1/2 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form
          className="lg:w-1/2"
          action="https://formspree.io/f/xleyzoyj"
          method="POST"
        >
          <input
            type="email"
            className="lg:w-[60%] w-80 py-2 px-5 border-2 border-black rounded-l-md"
            placeholder="Enter email"
            name="_replyto"
          />
          <button
            type="submit"
            className="lg:w-[30%] w-32 py-2 bg-yellow-500 border-2 border-black rounded-r-md"
          >
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
