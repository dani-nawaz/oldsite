import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { Header } from './components/Header'
import HomeScreen from './screens/HomeScreen'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import NewsScreen from './screens/NewsScreen'
import ContactScreen from './screens/ContactScreen'
function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/news' component={NewsScreen} />
      <Route path='/contact' component={ContactScreen} />
      <Footer />
    </Router>
  )
}

export default App
