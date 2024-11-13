import Image from "next/image";
import styles from "./page.module.css"


export default function Home() {
  return (
    <>
      <div className="hero-section">
         <div className="container">
            <div className="main">
                 <div className="text-container">
                       <h1 className="main-text">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                       <br>
                       </br>
                       <p className="main-para">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                       <br>
                       </br>
                       <button className="resume-btn">Explore Now</button>
                 </div>
            <div>
                       <div>
                         <Image src="/image.jpg" width={400}  height={400} alt="image"></Image>
                      </div>
            </div>
          </div>
        </div> 
      </div>  
    </>
  );
}
