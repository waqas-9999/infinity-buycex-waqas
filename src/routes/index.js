import DeveloperPage from '../components/GetStarted';
import PrivacyPolicy from '../components/PrivacyPolicy/Index';
import TermsofService from '../components/TermsConditions/Index';
import Getstarted from '../views/Getstarted';
import Home from '../views/Home';



let routes = [

	{
		path: '/',
		component: Home,
		layout: 'main',
	},
	{
		path: '/privacy-policy',
		component: PrivacyPolicy,
		layout: 'main',
	},
	{
		path: '/terms-service',
		component: TermsofService,
		layout: 'main',
	},
	{
		path: '/get-started',
		component: Getstarted,
		layout: 'main',
	},
	
];
export default routes;