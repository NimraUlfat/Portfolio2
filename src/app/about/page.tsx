import Image from "next/image"
import image11 from "../../../public/images/image11.jpg";
export default function About(){
    return(
        <div>
            <div className="bg-black min-h-screen py-12 px-6">
 
  <section className="max-w-3xl mx-auto text-center mb-12">
  <Image 
    src={image11}
    alt="Nimra Ulfat"
    width={250}
    height={250}
    className="about-image"
  />
    <h1 className="text-6xl font-extrabold text-pink-700 mb-2">Nimra Ulfat</h1>
    <p className="text-white text-lg">UI/UX Designer & Frontend Developer</p>
  </section>
  
 
  <section className="max-w-4xl mx-auto bg-pink-50 p-8 rounded-lg shadow-md">
    <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      Hello! I am Nimra Ulfat, a passionate UI/UX designer and frontend developer. With a keen eye for aesthetics and a love for creating visually engaging, user-friendly experiences, I specialize in designing intuitive interfaces and bringing them to life with code. My journey in design started with a curiosity to create and communicate visually, which has now grown into a dedicated career.
    </p>
  </section>

 
  <section className="max-w-4xl mx-auto mt-12">
    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-pink-100 rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-medium text-pink-700">HTML</h3>
      </div>
      <div className="p-4 bg-pink-100 rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-medium text-pink-700">CSS</h3>
      </div>
      <div className="p-4 bg-pink-100 rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-medium text-pink-700">JavaScript</h3>
      </div>
      <div className="p-4 bg-pink-100 rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-medium text-pink-700">UI/UX Design</h3>
      </div>
      
      
    </div>
  </section>
  
  
  <section className="max-w-3xl mx-auto mt-12 bg-pink-700 text-white p-8 rounded-lg text-center shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
    <p>If you would like to connect or discuss a project, feel free to reach out to me!</p>
    <a href="mailto:nimra@example.com" className="inline-block mt-4 px-6 py-2 bg-white text-pink-700 font-medium rounded-full shadow hover:bg-gray-100">Contact Me</a>
  </section>
</div>

        </div>
    )
}