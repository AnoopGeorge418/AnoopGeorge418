import { WorksComponent } from '@/components/Sections/Works';
import { getWorks } from '@/lib/works';

const WorksPage = async () => {
	const { projects, stats, error } = await getWorks();

	return (
		<div className="flex flex-col dark:bg-black min-h-screen w-full bg-background items-center">
			<WorksComponent projects={projects} stats={stats} error={error} />
		</div>
	);
};

export default WorksPage;
