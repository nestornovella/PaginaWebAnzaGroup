import Header from '../src/components/header';
import Logo from '../src/components/logo';
import Navbar from '../src/components/navBar';
import Services from '../src/components/services';
import './index.css'

function App() {

    return (
        <main>
            <Navbar/>
            <Header/>
            <Services/>
            <Logo/>
        </main>
    )
}
export default App;