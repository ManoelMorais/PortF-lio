import logo from "../assets/ola.webp";

export default function Welcome() {
  return (
    <div className="bg-bgShade bg-slate-900  text-white shadow-md" id="home">
      <div className="lg:px-16 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-5">
        <div className="md:w-1/2 w-full max-lg:px-20">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full mt-5 max-lg:p-10">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Olá, Holla, Hi, Ciao,{" "}
            <span className="text-teal-300">I am Morais Manoel</span>
          </p>
          <h1 className="font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5 text-teal-300">
            Developer passionate about technology
          </h1>
          <p className="text-xl mb-8 text-justify">
            Welcome to my portfolio! I'm a passionate programmer dedicated to
            turning lines of code into functional and innovative solutions. With
            a problem-solving mindset, I've been working on a variety of
            projects, from intuitive applications to robust systems. Feel at
            home in my world!
          </p>
        </div>
      </div>
    </div>
  );
}
