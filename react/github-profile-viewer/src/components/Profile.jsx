import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
function Profile({ name, company, blog, location, email, bio, avatar_url }) {
	return (
		<div className="Profile">
			<h1>{name}</h1>
			<div>
				<HiOutlineOfficeBuilding />
				<span>{company}</span>
			</div>
			<div>
				<FaBlog />
				<span>{blog}</span>
			</div>
			<div>
				<IoLocation />
				<span>{location}</span>
			</div>
			<div>
				<MdOutlineEmail />
				<span>{email}</span>
			</div>
			<p>{bio}</p>
			<img src={avatar_url} alt="Github profile picture"></img>
		</div>
	);
}

export default Profile;
