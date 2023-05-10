import Image from "next/image"

export const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <Image src="/logotipo.svg" alt="Logo" width={100} height={100} />

      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Pages</a>
          </li>

          <li>
            <a href="#">Products</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">Shop</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  )
}