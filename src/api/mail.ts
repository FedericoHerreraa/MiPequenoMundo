import axios from 'axios'
import { EmailDto } from './mailDto'

export const sendScoolEmailRequest = async (formData: EmailDto) => {
    try {  
        const res = await axios.post('http://localhost:3000/api/sendSchool', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}