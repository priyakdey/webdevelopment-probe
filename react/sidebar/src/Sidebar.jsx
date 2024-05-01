import Tree from "./Tree";

import DATA from "./assets/data/data.js";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Tree content={DATA} level={0} />
		</div>
	);
};

export default Sidebar;
