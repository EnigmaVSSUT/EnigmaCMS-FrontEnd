import './App.css'
import './styles/globals.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from './app/root/RootLayout'
import Background from './ui/Background'
import HomePage from './app/home/Home'
import UserProfile from './app/profile/[profile]'
import Team from './app/team/Team'
import Blogs from './app/blogs/Blogs'
import SingleBlog from './app/blogs/[blogid]'
import Projects from './app/projects/Projects'
import Events from './app/events/Events'

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
				path: '/events',
				element: < Events/>
			},
			{
				path: '/blogs',
				element: < Blogs/>
			},
			{
				path: '/projects',
				element: < Projects/>
			},
			
			{
				path: '/team',
				element: < Team/>
			},
			{
				path: '/blogs/:blogid',
				element: < SingleBlog/>
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
