import React, { useState } from 'react';

// Sample comments data
const commentsData = [
    { id: 1, user: 'Jane Doe', text: 'Great service! Highly recommend it.', time: '10:00 AM' },
    { id: 2, user: 'John Smith', text: 'I found this very helpful. Thanks for sharing!', time: '10:05 AM' },
    { id: 3, user: 'Alice Johnson', text: 'Looking forward to using this service!', time: '10:10 AM' },
];

const CommentsComponent: React.FC<any> = ({data}) => {
    const [inputValue, setInputValue] = useState('');
    const [comments, setComments] = useState(commentsData);

    const handleAddComment = () => {
        if (inputValue.trim() !== '') {
            const newComment = {
                id: comments.length + 1, // Unique ID for the new comment
                user: 'Me', // Replace with actual user name
                text: inputValue,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time
            };
            setComments([...comments, newComment]);
            setInputValue(''); // Clear the input after adding
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md bg-white  h-full">
            {/* Header */}
            <div className="flex px-6 pt-3 items-center justify-between mb-4 border-b pb-2">
                <div className="flex items-center">
                    <img
                        src={data?.user?.profilePictureUrl} // Replace with actual user image
                        alt="User Profile"
                        className="w-12 h-12 rounded-full border border-[3px] border-primary mr-3"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-[13px] md:text-[16px]">{data?.user?.username}</p>
                        <p className="text-gray-400 text-[13px] md:text-[16px]">{data?.user?.location?.locationName}</p>
                    </div>
                </div>
                <button className="text-gray-600 hover:text-primary">
                    <span className="material-icons text-xl">...</span> {/* Options icon */}
                </button>
            </div>

            {/* Comments Area */}
            <div className="flex-grow px-6 overflow-y-auto mb-4 border-b pb-4">
                {comments.map((comment) => (
                    <div key={comment.id} className={`mb-2 ${comment.user === 'Me' ? 'text-right' : 'text-left'}`}>
                        <p className={`${comment.user === 'Me' ? 'bg-blue-500 text-white' : ''} inline-block p-2 rounded-lg`}>
                            <strong>{comment.user}: </strong>{comment.text}
                        </p>
                        <span className="text-xs text-gray-500 ml-2">{comment.time}</span>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="flex px-6 pb-3 items-center">
                <img
                    src={data?.user?.profilePictureUrl} // Replace with actual user image
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border border-gray-300 mr-3"
                />
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                
                
            </div>
        </div>
    );
};

export default CommentsComponent;
