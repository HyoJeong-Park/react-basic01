// import React from 'react';
// import {useState} from 'react';

// const TodoList = ({addNewlist}) => {
//     const [newListContent, setNewListcontent] = useState('');

//     const onTextChange = (e) => {
//         setNewListcontent(e.target.value);
//     };

//     const onClicksubmit = () => {
//         const newlist = {
//             id: Date.now(),
//             content: newListContent,
//             date: new Date().toLocaleDateString('ko-kr'),
//         };
//         addNewlist(newlist);
//         setNewListcontent('');
//     };

//     return(
//         <div>
//             <textarea
//                 className="text_list"
//                 placehlder="wirte"
//                 value={newListContent}
//                 onChange={onTextChange}
//             ></textarea>
//             <button className="add_list close" onClick={onClicksubmit}>Add List</button>
//         </div>
//     )
// }

// export default TodoList;