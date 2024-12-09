import Image from "next/image"
import image11 from "../../../public/images/image11.jpg";
export default function Portfolio(){
    return(
   
        <div className="min-h-screen bg-black relative flex flex-col justify-between pt-16">
  
  <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-pink-700 rounded-tl-full">
  </div>


{/* Decorative Circle in Center */}
<div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] bg-pink-700 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
 
  <div className="p-8 text-left mx-auto max-w-4xl mt-8 ml-1">
  <h1 className="text-6xl font-extrabold">I am Nimra Ulfat</h1>
  <br></br>
  <h1 className="text-6xl text-pink-700 font-bold">UI & UX Designer</h1>
  <p className="mt-4">
    I am a UI/UX designer dedicated to building intuitive, engaging, <br />
    and visually compelling digital experiences. My design philosophy combines <br />
    user empathy with creative problem-solving to create products that users love.
  </p>
</div>
  <div className="absolute top-0 right-0 h-96 w-96">
  <Image 
    src={image11} 
    alt="img" 
    width={500}  
    height={500} 
    className="object-cover h-full w-full rounded-bl-full"
  />
</div>

{/* New Section: Skills or Projects */}
<div className="p-8 text-left ml-16 max-w-4xl mt-8">
  <h2 className="text-3xl font-extrabold text-pink-700">My Skills</h2>
  <ul className="mt-4 text-white space-y-2">
    <li className="text-xl">UI Design</li>
    <li className="text-xl">Next js</li>
    <li className="text-xl">Typescript</li>
    <li className="text-xl">Javascript</li>
    <li className="text-xl">HTML & CSS</li>
  </ul>
</div>

{/* Decorative Circle */}
<div className="absolute bottom-16 left-1/4 h-[200px] w-[200px] bg-pink-700 rounded-full opacity-30"></div>
      
</div>
    )
}