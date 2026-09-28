import { NavBar } from '@/components/layouts/NavBar';

const Home = () => {
	return (
		<div className="flex flex-col dark:bg-black min-h-screen gap-4 bg-background items-center">
			<NavBar />
		</div>
	);
};

export default Home;
