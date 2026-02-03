import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
	const[mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message , type)=>{
		setAlert({
			msg: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null);
		}, 1500);
  	}

	const toggleMode = ()=>{
		if (mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert("Dark mode enabled successfully!", "success");
			document.title = "TextUtils - Dark Mode";
		}
		else{
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Dark mode disabled successfully!", "success");
			document.title = "TextUtils - Light Mode";
		}
	}

	return (
		<>
			<Router>
				<Navbar title = "Textutils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
				<Alert alert = {alert}/>
				<div className="container my-3">
					<Routes>
						<Route exact path = "/" element = {<TextArea showAlert = {showAlert} heading = "Enter your text to redefine" mode = {mode}/>} />
          				<Route exact path="/about" element={<About showAlert = {showAlert} heading = "About Us" mode = {mode}/>} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
