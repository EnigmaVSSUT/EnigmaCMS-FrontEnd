import './App.css'
import './styles/globals.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from './app/root/RootLayout'
import Background from './ui/Background'
import HomePage from './app/home/Home'
import UserProfile from './app/profile/[profile]'
import Team from './app/team/Team'
import Blogs from './app/blogs/Blogs'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/profile/:username',
				element: < UserProfile/>
			},
			{
				path: '/team',
				element: < Team/>
			},
			{
				path: '/blogs',
				element: < Blogs/>
			}
		]
	}
])

const App = () => {
	return (
		<Background>
			<RouterProvider 
				router={router}
			/>
		</Background>
	)
}

export default App
