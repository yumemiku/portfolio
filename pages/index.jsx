import Head from "next/head";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>Daniela Sofia Sismey</title>
      </Head>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-center my-6 text-purple-900 font-bold">Daniela Sofia Sismey</h1>
        <h2 className="text-2xl text-left mr-6 text-purple-800"> About me</h2>
        <div className="flex">
          <img className="mr-4" width="300" src="/images/me.jpg" />
          <div>
            <p> Hello! My name is Daniela -some people call me Sofia, my second name, and I am an aspiring programmer. I was born in Portugal and
              grew up in London, UK. I am actually a registered paediatric nurse right now, and picked up coding as a sort of hobby and sort of
              future aspiration! My favourite things in the world are gaming, Hatsune Miku and my pet rats.</p><br />
            <h2 className="text-2xl text-left mr-6 text-purple-800"> Current Portfolio - watch this space!</h2>
            <ul className="list-disc list-inside">
              <li><a className="text-1xl text-left mr-3 text-fuchsia-800" href="https://kelvinconverter.netlify.app/"> Kelvin temperature converter</a></li>
            </ul><br />
          </div>
        </div>
        <footer className="text-center my-9 text-purple-900">&copy; Daniela Sofia Sismey/ yumemiku 2023</footer>
      </div>
    </>
  )
}
