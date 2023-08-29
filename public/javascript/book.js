import axios from "axios";
import { showAlert } from "./alerts";

export const addBook = async (Title, DatePublished, Description, PageCount, Genre, BookImage, BookLandscapeImages, Summary, Publisher)=>{
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/books',
            data: {
                Title,
                DatePublished,
                Description,
                PageCount,
                Genre,
                BookImage,
                BookLandscapeImages,
                Summary,
                Publisher
            }
        })
        if(res.statusText === 'Created'){
            showAlert('success','Book added successfully')
            window.setTimeout(() => {
                location.assign('/api/my-books')
            }, 1500)
        }
    }catch(error){
        showAlert('error',error.response.data.message)
    }
}

export const deleteBook = async (BookID)=>{
    try{
        const res = await axios({
            method: 'DELETE',
            url: `http://127.0.0.1:3000/books/delete/${BookID}`,
            
        })
        if(res.statusText === 'OK'){
            showAlert('success','Book deleted successfully')
            window.setTimeout(() => {
                location.assign('/api/my-books')
            }, 1500)
        }
    }catch(error){
        showAlert('error',error.response.data.error)
    }
}

export const updateBook = async (BookID, Title, DatePublished, Description, PageCount, Genre, BookImage, BookLandscapeImages, Summary, Publisher)=>{
    try{
        const res = await axios({
            method: 'PUT',
            url: `http://127.0.0.1:3000/books/update/${BookID}`,
            data: {
                Title,
                DatePublished,
                Description,
                PageCount,
                Genre,
                BookImage,
                BookLandscapeImages,
                Summary,
                Publisher
            }
        })
        if(res.statusText === 'OK'){
            showAlert('success','Book updated successfully')
            window.setTimeout(() => {
                location.assign(`/api/book/${BookID}`)
            }, 1500)
        }
    }catch(error){
        showAlert('error',error.response.data.error)
    }
}
        