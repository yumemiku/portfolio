import Link from "next/link";

export default function Home() {
  return (
    <>
    <head>Daniela Sofia Sismey</head>
    <h1 className="text-3xl text-center my-6 text-purple-900"><b>Daniela Sofia Sismey</b></h1>
    <h2 className="text-2xl text-left mr-6 text-purple-800"> About me</h2>
    <img className="float-left" src="https://imgur.com/w2VXfUP"/>
    <p className> Hello! My name is Daniela (some people call me Sofia, my second name) and I am an aspiring programmer. I was born in Portugal and
      grew up in London, UK. I am actually a registered paediatric nurse right now, and picked up coding as a sort of hobby and sort of 
      future aspiration! My favourite things in the world are gaming, Hatsune Miku and my pet rats.</p><br></br>
    <h2 className="text-2xl text-left mr-6 text-purple-800"> Current Portfolio - watch this space!</h2>
      <ul>
      <li><a className="text-1xl text-left mr-3 text-fuchsia-800" href="https://kelvinconverter.netlify.app/">&#x2022; Kelvin temperature converter</a></li>
      </ul><br></br>
    <footer className="text-center my-9 text-purple-900">&copy; Daniela Sofia Sismey/ yumemiku 2023</footer>
    </>
  )
}
