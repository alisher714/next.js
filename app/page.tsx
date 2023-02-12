import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        Home
      </h1>
      <Link href={"/about"}>About</Link>
      <br />

      <Link href={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2F23aumh6u8s0i%2Fc04wENP3FnbevwdWzrePs%2F1e2739fa6d0aa5192cf89599e009da4e%2Fnextjs&imgrefurl=https%3A%2F%2Fauth0.com%2Fblog%2Fnext-js-practical-introduction-for-react-developers-part-2%2F&tbnid=1m67NMSoDo-mfM&vet=12ahUKEwiftriRpY_9AhXCXKQEHZTLAQwQMygAegUIARDiAQ..i&docid=YcPkyyuQpgUJnM&w=1176&h=1056&q=next.js%20image&ved=2ahUKEwiftriRpY_9AhXCXKQEHZTLAQwQMygAegUIARDiAQ"} target="blank">
        <Image src={"next.svg"} alt="next image" width={100} height={100}></Image>
      </Link>
    </>
  )
}
