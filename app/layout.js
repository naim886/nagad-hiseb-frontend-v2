import '../assets/styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/style.scss'
import Layout from '@/components/layouts/Layout';


export const metadata = {
  title: "Nagad Hiseb | Welcome",
  description: "Nagad Hiseb | All-in-One POS & Inventory Software",
};

export default function RootLayout({ children }) {

  return (
    <Layout children={children}/>
  );
}
