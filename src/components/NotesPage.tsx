import React from "react";

const NotesPage: React.FC = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-screen">
        <label
          htmlFor="firstFolder"
          className="text-[#242424] text-[76.8px] font-normal leading-normal"
        >
          Welcome to <span className="font-bold">Notes</span>
        </label>
        <input
          type="text"
          id="firstFolder"
          placeholder="+  Create your first folder here"
          className="w-[59.375%] h-fit mt-[28px] p-[10px] border-solid border-[1px] border-[#BEBEBE] rounded-[8px] "
        />
      </section>
      {/* <section className="absolute top-0 right-0 flex flex-col w-[66.153%] h-screen ">
        <div className="w-fit h-fit ml-[44px] font-normal leading-normal">
          <p className="w-fit h-fit mt-[53px] text-[17.067px]">College / new</p>
          <h1 className="w-fit h-fit mt-[29px] text-[42.67px] font-bold">
            Title
          </h1>
          <p className="w-fit h-fit mt-[12px] text-[19.2px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            ligula nec pretium faucibus. Phasellus accumsan a augue et
            efficitur.
          </p>
          <p className="w-fit h-fit mt-[32px] text-[19.2px]">
            Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam
            arcu tortor, dignissim id orci ac, vestibulum posuere ipsum.
            Suspendisse vel augue eget libero scelerisque euismod. Suspendisse
            vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam
            libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla
            semper metus vel porttitor ornare. Praesent ultricies, justo ac
            volutpat rhoncus, nulla urna consectetur massa, a porttitor felis
            sapien at nibh. Aenean maximus ullamcorper est, nec pretium dui
            dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum
            posuere ipsum. Suspendisse vel augue eget libero scelerisque
            euismod. Suspendisse vulputate erat id est ultrices, vel ultrices
            ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales
            pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent
            ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa,
            a porttitor felis sapien at nibh. Aenean maximus ullamcorper est,
            nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci
            ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero
            scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel
            ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in,
            sodales pharetra ipsum. Nulla semper metus vel porttitor ornare.
            Praesent ultricies, justo ac volutpat rhoncus, nulla urna
            consectetur massa, a porttitor felis sapien at nibh. Aenean maximus
            ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor,
            dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel
            augue eget libero scelerisque euismod. Suspendisse vulputate erat id
            est ultrices, vel ultrices ligula ornare. Aliquam libero lacus,
            egestas eu arcu in, sodales{" "}
          </p>
        </div>
      </section> */}
    </>
  );
};

export default NotesPage;
