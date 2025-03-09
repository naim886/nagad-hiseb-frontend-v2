import '../assets/styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/style.scss'
import Nav from '@/components/layouts/Nav';
import Footer from '@/components/layouts/Footer';
import SideBar from '@/components/layouts/SideBar';


export const metadata = {
  title: "Nagad Hiseb | Welcome",
  description: "Nagad Hiseb | All-in-One POS & Inventory Software",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="sb-nav-fixed">
        <Nav />
        <div id="layoutSidenav">
          <SideBar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">                
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
