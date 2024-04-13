import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoCloseSharp } from "react-icons/io5";


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	// commented this while doing responsiveness and took me 1 and half hour to decode that this should be commented
	// 14-04-2024   02:18 AM --NIKHIL CHARY

	// useEffect(() => {
	// 	// cleanup function (unmounts)
	// 	return () => setSelectedConversation(null);
	// }, [setSelectedConversation]);

	return (
		<div className='w-[250px] sm:w-[290px] md:min-w-[450px] flex flex-col '>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
						<button
							className='absolute top-0 right-0 px-3 py-2 mt-1 text-white'
							onClick={() => setSelectedConversation(null)}
						>
							<IoCloseSharp />
						</button>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};



