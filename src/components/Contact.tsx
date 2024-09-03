import { Icons } from "@/assets/Assets";
import bg_img from "@/assets/regular_images/contact_bg_img.jpg";

interface ContactProps {
  paddingTopLg: string;
  paddingTopSm: string;
}

const Contact = ({ paddingTopLg, paddingTopSm }: ContactProps) => {
  return (
    <div
      className={`sm:px-[10%] px-4 xs:px-10 md:pt-[${paddingTopLg}] pt-[${paddingTopSm}] sm:pb-36 pb-[3rem] bg-black`}
    >
      <div className="bg-gradient-to-tr from-[#FF1212] to-[#00000000] h-[0.4rem] mb-20 w-14"></div>
      <div className="flex flex-col md:flex-row py-3 sm:py-8 px-3 sm:px-10 rounded-2xl gap-10  sm:border w-full sm:border-[#FFFFFFE3] border-black items-center justify-between">
        <div className="rounded-lg overflow-hidden md:w-[50%] w-full">
          <img src={bg_img} alt="man behind laptop" className="w-full" />
        </div>
        <div className="md:w-[50%] w-full">
          <h5 className="text-[#FFFFFF] font-semibold text-[1.1rem] sm:text-[1.8rem] md:text-[1.1rem] lg:text-[1.8rem]">
            Let's talk about your project
          </h5>
          <p className="text-[#ffffffce] mb-8 sm:text-[1rem] text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]">
            Contact us and let's build something beautiful together.
          </p>
          <form action="" className="w-full">
            <div className="flex items-center gap-4 mb-3 w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-inherit px-2 border-[#FFFFFFB5] border rounded-[0.313rem] w-1/2 h-10 text-white"
              />
              <input
                type="text"
                placeholder="First Name"
                className="bg-inherit px-2 border-[#FFFFFFB5] border rounded-[0.313rem] w-1/2 h-10 text-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bg-inherit px-2 border-[#FFFFFFB5] border rounded-[0.313rem] w-full h-10 text-white mb-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-inherit px-2 border-[#FFFFFFB5] border rounded-[0.313rem] w-full h-10 text-white mb-3"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="bg-inherit px-2 py-2 border-[#FFFFFFB5] border rounded-[0.313rem] w-full h-20 text-white mb-3"
            ></textarea>
            <button className="w-full text-[#FFFFFFB5] py-3 flex gap-3 rounded-[0.313rem] items-center justify-center bg-[#FF0000]">
              Submit <Icons.ButtonArrow className="fill-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
