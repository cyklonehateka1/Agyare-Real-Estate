import { Icons } from "@/assets/Assets";

const MainSection = () => {
  return (
    <div className="bbg-white sm:px-[10%] px-4 xs:px-6 relative lg:h-[51rem] md:h-[48rem] h-[59rem] flex items-end lg:mb-20 mb-10">
      <div className="bg-white sm:p-6 p-3 w-[90%] sm:w-[80%] sm:left-[10%] left-[5%] rounded-lg shadow-lg shadow-[#1118270D] absolute top-[-12rem] lg:h-[40rem] md:h-[33rem] h-[24rem]">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0026124013834!2d-0.4258858194059591!3d5.566627680010492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbbd340f64641%3A0x74386c169a7a3a94!2sAgyare%20Real%20Estate%20And%20Construction%20Ghana%20Ltd!5e0!3m2!1sen!2ses!4v1725532599833!5m2!1sen!2ses"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row px-3 rounded-2xl gap-10 w-full items-center justify-between">
        <div className="rounded-lg overflow-hidden md:w-[50%] w-full">
          <h3 className="font-semibold lg:text-[1.8rem] text-[1.4rem] xs:text-[1.6rem] sm:text-[2.1rem] md:text-[1.4rem]">
            Let’s talk about your project
          </h3>
          <h5 className="font-medium text-[0.8rem] sm:text-[1rem] md:text-[0.8rem] mb-6">
            Send us a message or request a quote for your next project
          </h5>

          <p className="font-semibold text-[#808080]">Our location</p>
          <h5 className="text-[0.83rem] mb-2 font-medium">
            Kasoa High Tension, Central Region
          </h5>
          <p className="font-semibold text-[#808080]">Phone number(s)</p>
          <h5 className="text-[0.83rem] mb-2 font-medium">
            +233 (0)201685670 / +233 (0)546969687{" "}
          </h5>
          <p className="font-semibold text-[#808080]">General enquiries</p>
          <h5 className="text-[0.83rem] mb-2 font-medium">
            info@agyarerealestates.com
          </h5>
          <p className="font-semibold text-[#808080]">Connect with us</p>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com">
              <Icons.Fb className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com">
              <Icons.Ig className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com">
              <Icons.Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <form action="" className="w-full">
            <div className="flex items-center gap-4 mb-3 w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-inherit px-2 border-[#000000B5] border rounded-[0.313rem] w-1/2 h-10 text-[#3d3d3d] outline-none"
              />
              <input
                type="text"
                placeholder="First Name"
                className="bg-inherit px-2 border-[#000000B5] border rounded-[0.313rem] w-1/2 h-10 text-[#3d3d3d] outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bg-inherit px-2 border-[#000000B5] border rounded-[0.313rem] w-full h-10 text-[#3d3d3d] outline-none mb-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-inherit px-2 border-[#000000B5] border rounded-[0.313rem] w-full h-10 text-[#3d3d3d] outline-none mb-3"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="bg-inherit px-2 py-2 border-[#000000B5] border rounded-[0.313rem] w-full h-20 text-[#3d3d3d] outline-none mb-3"
            ></textarea>
            <button className="w-full text-white py-3 flex gap-3 rounded-[0.313rem] items-center justify-center bg-[#FF0000]">
              Submit <Icons.ButtonArrow className="fill-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
