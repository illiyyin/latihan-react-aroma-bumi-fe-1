import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/home'
import Layout from './component/shared/Layout'
import Contact from './component/contact'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/store',
				element: <Store />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
