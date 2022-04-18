import axios from 'axios';
import {config} from '../config/configs';

export default class Remote {
    static async sendContactForm(details: { name: string, email: string, message: string }) {
        try {
            const response = await axios.post(`${config.SERVER_URL}/contact-form`, {
                ...details
            });
            if (response.status === 200) {
                return {
                    success: true,
                    data: response.data.message
                }
            }
            return {
                success: false,
                message: 'Something went wrong, please try again later'
            }
        } catch (error) {
            return {
                success: false,
                message: 'Something went wrong, please try again later'
            }
        }
    }
    static async sendMailListUpdate(email: string) {
        try {
            const response = await axios.post(`${config.SERVER_URL}/contact-form/mailing`, {
                email
            })
            if (response.status === 200) {
                return {
                    success: true,
                    data: response.data.message
                }
            }
            return {
                success: false,
                message: 'Something went wrong, please try again later'
            }
        } catch (error) {
            return {
                success: false,
                message: 'Something went wrong, please try again later'
            }
        }
    }
}