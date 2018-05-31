import Home from './components/Home'
import Follow from './components/Follow'
import Column from './components/Column'
import UserInfo from './components/UserInfo'
import Article from './components/article'

export default [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/follow',
		component: Follow
	},
	{
		path: '/column',
		component: Column
	},
	{
		path: '/user-info',
		component: UserInfo
	},
	{
		path: '/article/:id',
		component: Article
	},
	{ 
	    path: '/', 
	    redirect: '/home' 
  	},
  	{ 
	    path: '*', 
	    redirect: '/home' 
  	}
]