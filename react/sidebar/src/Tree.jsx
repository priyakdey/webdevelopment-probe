import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";

const Tree = ({ content, level }) => {
	return (
		<ul className="tree">
			{content.map((item) => (
				<Node key={item.id} item={item} level={level} />
			))}
		</ul>
	);
};

const Node = ({ item, level }) => {
	const [isClosed, setIsClosed] = useState(true);

	const canExpand = item.children && item.children.length > 0;

	const handleClick = (event) => {
		event.stopPropagation();
		setIsClosed((prev) => !prev);
	};

	return (
		<li
			className="node"
			onClick={handleClick}
			style={{ paddingLeft: `${level * 10}px` }}
		>
			<div className="container">
				<div className="innercontainer">
					<Icon canExpand={canExpand} isClosed={isClosed} />
					<label>
						<a href={!canExpand ? item.link : null}>{item.label}</a>
					</label>
				</div>
				{!isClosed && <Tree content={item.children} level={level + 1} />}
			</div>
		</li>
	);
};

const Icon = ({ canExpand, isClosed }) => {
	return canExpand ? <CaretIcon isClosed={isClosed} /> : <DotIcon />;
};

const CaretIcon = ({ isClosed }) => {
	return isClosed ? <FaAngleRight /> : <FaAngleDown />;
};

const DotIcon = () => {
	return <GoDotFill />;
};

export default Tree;
