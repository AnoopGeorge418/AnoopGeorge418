import { WorksComponent } from "@/components/Sections/Works";

const WorksPage = async () => {

	return (
		<div className="flex flex-col dark:bg-black min-h-screen gap-4 bg-background items-center">
			<WorksComponent />
		</div>
	);
};

export default WorksPage;
