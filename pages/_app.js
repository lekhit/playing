import '../styles/globals.css'
import {AppWrapper} from '../context/notes/state';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppWrapper>
<Component {...pageProps} />
</AppWrapper>
    </div>
    
    )
  
}

export default MyApp
