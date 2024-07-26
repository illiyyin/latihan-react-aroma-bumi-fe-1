import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/home'
import Layout from './component/shared/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
