import DeveloperPage from '../components/GetStarted';
import PrivacyPolicy from '../components/PrivacyPolicy/Index';
import TermsofService from '../components/TermsConditions/Index';
import SubmitAppPage from '../views/DappSubmitFrom';
import EcoSystemProject from '../views/EcoSystemProject';
import Getstarted from '../views/Getstarted';
import Home from '../views/Home';
import RoadmapPage from '../views/RoadMap';
import WalletDashboard from '../views/Test';
import WalletTransaction from '../components/LudoGame/WalletTransaction';
import TransactionHistory from '../components/LudoGame/Transaction';
import profile from '../views/profile';

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
	{
		path: '/eco-system-project',
		component: EcoSystemProject,
		layout: 'main',
	},
	{
		path: '/dapp/submit-form',
		component: SubmitAppPage,
		layout: 'main',
	},
	{
		path: '/roadmap',
		component: RoadmapPage,
		layout: 'main',
	},
	{
		path:'/test',
		component: WalletDashboard,
		layout: 'main'
	},
	{
		path:'/deposit',
		component: WalletTransaction,
		layout: 'main'
	},
	{
		path:'/transaction',
		component: TransactionHistory,
		layout: 'main'
	},
	{
		path:'/profile',
		component: profile,
		layout: 'main'
	}
	
];
export default routes;