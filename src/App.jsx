import './App.css';
import Header from './components/Header';
import Shop from './components/shop/Shop';
import Footer from './components/Footer';
import { WithShopContext } from './context/Shop-context';

function App() {

	return (
		<>
			<Header />
			<WithShopContext>
				<Shop />
			</WithShopContext>
			<Footer />
		</>
	);
}

export default App;
