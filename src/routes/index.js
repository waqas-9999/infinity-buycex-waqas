import PrivacyPolicy from '../components/PrivacyPolicy/Index';
import TermsofService from '../components/TermsConditions/Index';
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
	
];
export default routes;