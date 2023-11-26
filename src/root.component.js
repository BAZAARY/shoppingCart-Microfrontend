import "./App.css";
import "./index.css";
import { Routes, Route , BrowserRouter} from "react-router-dom";
import ShoppingCart from "./pages/shoppingCart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from "@apollo/client";
import client from "./connections/apollo";
import LoadingPage from "./components/LoadingPage";


export default function Root(props) {
  return (
		<BrowserRouter> 
			<ApolloProvider client={client}>
				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					bodyClassName={"toastBody"}
					/>
				<Routes>
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/aver" element={<LoadingPage/>}/>
				</Routes>
			</ApolloProvider>
		</BrowserRouter>
	);
}
