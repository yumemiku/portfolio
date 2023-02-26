import Head from "next/head";
import Link from "next/link";

export default function Home() {

    return (
        <>
            <Head>
                <title>Everyday with Isa</title>
            </Head>
            <div className="bg-indigo-200 font-serif">
                <div className="flex">
                    <a href="#contact"><img width={100} src="https://content.codecademy.com/courses/learn-html/elements-and-structure/profile.jpg" alt="Isa" /></a>
                    <h3 className="text-2xl">by Isabelle Rodriguez | 1 day ago</h3>
                </div>
                <h1 className="py-10 text-5xl text-center">An Insider’s Guide to NYFW</h1>
                <div className="flex text-justify whitespace-normal indent-5 px-20 text-1xl">
                    <img className="content-center mx-auto" src="https://content.codecademy.com/courses/learn-html/elements-and-structure/image-one.jpeg" alt="A woman with shopping bags" />
                    <p className="p-5"><a href="https://en.wikipedia.org/wiki/New_York_Fashion_Week" target="_blank">NYFW</a> can be both amazingly fun & incredibly overwhelming, especially if you’ve never been. Luckily, I’m here to give you an insider’s guide and make your first show a pleasurable experience. By taking my tips and tricks, and following your gut, you’ll have an unforgettable experience!</p>
                    <br />
                </div>
                <h2 className="text-3xl text-center p-5">Getting Tickets & Picking the Shows</h2>
                <div className="flex text-justify whitespace-normal indent-5 px-20 text-1xl">
                    <img src="https://content.codecademy.com/courses/learn-html/elements-and-structure/image-two.jpeg" alt="wearing a dress and a leather jacket" />
                    <p className="p-5">If you’re lucky or connected you can get an invite, sans the price tag. But I wasn’t so lucky or connected my first 2 years so I’m here to help you out. First, plan out which shows are most important to you and make a schedule and this is a biggie: SET A BUDGET. If you’re worrying about blowing your cash the whole time you won’t have fun. Then check out prices, days, and times and prioritize the designers you want to see most. Lastly, purchase your tickets and get excited!</p>
                    <br />
                </div>
                <h2 className="text-3xl text-center p-5">Dressing for the Shows</h2>
                <div className="flex text-justify whitespace-normal indent-5 px-20 text-1xl">
                    <img src="https://content.codecademy.com/courses/learn-html/elements-and-structure/image-three.jpeg" alt="a fashion forward gentleman" />
                    <p className="p-5">Always be true to your own sense of style, if you don’t you’ll be uncomfortable the whole time and it will show. Remember, NYFW is about expressing yourself and taking in what the designers have chosen to express through their new lines. Also it’s important to wear shoes you’ll be comfortable in all day. Obviously you want to look good, but you’ll be on your feet all day long, so be prepared!</p>
                </div>
                <br />
                <br />
                <h4 className="text-2xl px-10 mr-10 mx-auto indent-10 ">Related Content</h4>
                <ul className="list-disc text-1xl mr-3 indent-10 list-inside ">
                    <li>How To Style Boyfriend Jeans</li>
                    <li>When Print Is Too Much</li>
                    <li>The Overalls Trend</li>
                    <li>Fall’s It Color: Blush</li>
                </ul>

                <br />
                <br />
                <footer>
                    <div className="text-center" id='contact'>
                        <p><strong>email:</strong> isa@fashionblog.com | <strong>phone:</strong> 917-555-1098 | <strong>address:</strong> 371 284th St, New York, NY, 10001</p>
                        <p className="text-fuchsia-900">© Daniela Sofia Sismey/ yumemiku 2023</p>
                    </div>
                </footer>
            </div>
        </>
    )
}