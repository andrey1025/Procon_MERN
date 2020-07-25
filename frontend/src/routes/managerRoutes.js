import ManagerWelcome from '../pages/manager';
import ManagerHome from '../pages/manager/home';
import ChangePassword from '../pages/changePassword';
import Account from '../pages/account';

const supervisorRoutes = [
    {
        path: '/manager/welcome',
        component: ManagerWelcome
    },
    {
        path: '/manager/home',
        component: ManagerHome
    },
    {
        path: '/manager/change-password',
        component: ChangePassword
    },
    {
        path: '/manager/account',
        component: Account
    }
];
export default supervisorRoutes;