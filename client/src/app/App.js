
import About from '../sections/About';
import CentralHeader from '../sections/CentralHeader';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Projects from '../sections/Projects';
import '../styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <div className='contact-banner'>
        <div>
        <TwitterIcon />
        <span><a href="https://twitter.com/agoraphobic_dev">@Agoraphobic_Dev</a></span>
        </div>
        <div>
        <EmailIcon />
        <span><a href="mailto:jaredreyes039@gmail.com" email="true">Jaredreyes039@gmail.com</a></span>
        </div>
        <div>
        <PhoneAndroidIcon />
        <span>+1 (520) 940-1534</span>
        </div>
      </div>

      <CentralHeader />
      <About />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Contact />
      <hr></hr>
      <Footer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
