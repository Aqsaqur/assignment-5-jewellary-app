import Link from "next/link";

export default function Header(data: any) {
    return (
      <>
        <div className={`${data.font.className} links-parent`} >
            <h6 className="text-white font-bold text-3xl md:text-5xl lg:text-[60px] pt-2 md:pt-0">Jewellery</h6>
            <ul className="links">
                <li className="link"><Link href="">Collections</Link></li>
                <li className="link"><Link href="">About</Link></li>
                <li className="link"><Link href="">Contact</Link></li>
            </ul>
        </div>
      </>
    );
  }
