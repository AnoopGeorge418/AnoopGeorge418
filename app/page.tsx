import { Button } from '@/components/ui/button';

const Home = () => {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen gap-4">
			<h1 className="font-lora text-2xl">Home Page</h1>
			<Button className="font-mono text-md p-4 w-80 cursor-pointer h-16">
				Just a Shadcn Button
			</Button>
		</div>
	);
};

export default Home;
