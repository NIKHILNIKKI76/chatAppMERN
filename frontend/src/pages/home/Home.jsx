import React, { useState, useEffect } from 'react';
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { selectedConversation ,setSelectedConversation} = useConversation();

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	return (
		<>
			{windowWidth < 640 ? (
				<div className='flex sm:h-[500px] md:h-[550px] h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600'>
					{ !selectedConversation? (
						<Sidebar />
					) :(
						<MessageContainer />
					)}
					
				</div>
			) : (
				<div className='flex h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600'>
					<Sidebar />
					<MessageContainer />
					
				</div>
			)}
		</>
	);
};

export default Home;
