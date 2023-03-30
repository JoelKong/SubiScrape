import Image from "next/image"

function Kofi() {
  return (
    <div>
      <a href="https://ko-fi.com/joelkong" target="_blank">
        <Image
          src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
          alt="Buy Me a Coffee at ko-fi.com"
          style={{ border: "0px" }}
          height={40}
          width={155}
        />
      </a>
    </div>
  )
}

export default Kofi
