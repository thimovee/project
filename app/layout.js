import '../styles/globals.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#191919]">
        <main>
            <Navbar/>
            <div className="-mt-[120px]">
          {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html >
  )
}