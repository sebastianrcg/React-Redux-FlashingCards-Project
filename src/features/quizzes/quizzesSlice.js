import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId} from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] ={id: id, name: name, topicId: topicId,
                 cardIds: cardIds }
        }
    }
})

export const addQuizTopic = quiz =>{
    const { id, topicId} = quiz;
    return (dispatch)=> {
        dispatch(addQuiz(quiz))
        dispatch(addQuizzId({quizId: id, topicId: topicId}))
    }
}

export const selectQuiz = (state)=> state.quizzes.quizzes;

export const { addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;